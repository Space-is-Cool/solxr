/* eslint-disable camelcase */
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User, Iotd } = require ('../db');

// router.get('/hey', (req, res) => {
//   console.log('someone says hey!', req.body);
//   res.send('hey hey hey');
// });

router.post('/create', async (req, res) => {
  const {username, password} = req.body;
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  User.findAll({
    where: {
      username: username
    }
  }).then(user => {
    if (user.length) {
      res.send('user exists');
    } else {
      User.create({username, hash});
      res.sendStatus(201);
    }
  });
});

router.post('/login', (req, res) =>{
  const {username, password: passwordAttempt} = req.body;
  User.findAll({
    where: {
      username: username
    }
  }).then(async user => {
    if (user.length) {
      const { dataValues: {hash, id, ...thisUser}} = user[0];
      const valid = await bcrypt.compare(passwordAttempt, hash);
      if (valid) {
        Iotd.findAll({
          where: {
            user_id: id
          }, attributes: ['date', 'id', 'url']
        }).then(favoriteIotds => {
          res.send({...thisUser, id, favoriteIotds});
        });
      } else {
        res.send('invalid password');
      }
    } else {
      res.sendStatus(401);
    }
  });
});

router.put('/iotd', (req, res) => {
  const { image: {url, date}, user: {id} } = req.body;
  Iotd.findAll({
    where: {
      date: date,
      user_id: id
    }
  }).then(likedImage => {
    if (likedImage.length) {
      Iotd.destroy({
        where: {
          date: date,
          user_id: id
        }
      }).then(() => res.send('destroyed'));
    } else {
      Iotd.create({url, date, user_id: id}).then(() => res.sendStatus(201));
    }
  });
});





// router.post('/iotd', (req, res) => {
//   Iotd.create({
//     user_id: 1,
//     date: '2015-01-03',
//     url: 'https://apod.nasa.gov/apod/image/2105/EarthMoonSpaceship_Apollo11Ord_960.jpg'
//   }).then(() => {
//     Iotd.create({
//       user_id: 2,
//       date: '2016-03-04',
//       url: 'https://apod.nasa.gov/apod/image/2105/EarthMoonSpaceship_Apollo11Ord_960.jpg'
//     }).then(() => {
//       Iotd.create({
//         user_id: 1,
//         date: '2020-05-04',
//         url: 'https://apod.nasa.gov/apod/image/2105/EarthMoonSpaceship_Apollo11Ord_960.jpg'
//       }).then(() => {
//         Iotd.create({
//           user_id: 3,
//           date: '2018-01-04',
//           url: 'https://apod.nasa.gov/apod/image/2105/EarthMoonSpaceship_Apollo11Ord_960.jpg'
//         }).then(() => {
//           res.send('yep');
//         });
//       });
//     });
//   });
// });



module.exports = router;
