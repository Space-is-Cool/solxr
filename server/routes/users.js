/* eslint-disable camelcase */
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User, Iotd } = require ('../db');

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

router.put('/update', (req, res) => {
  const {accessibility, email, music, subscribed, theme, id} = req.body;
  User.update({accessibility, email, music, subscribed, theme},
    {where: {
      id: id
    }})
    .then(() => res.sendStatus(201));
});

module.exports = router;
