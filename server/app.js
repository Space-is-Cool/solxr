/* eslint-disable no-unused-vars */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/server');
const usersRouter = require('./routes/users');
const nasaRouter = require('./routes/nasa');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nasa', nasaRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });


// app.get('/users', (req, res) => {
//   Users.find()
//     .then((data) => res.status(200).json(data))
//     .catch();
// });

// app.get('/user', (req, res) => {
//   Users.findOne({ userId: req.cookies.user_id }).then((data) => {
//     res.json(data);
//   });
// });

// app.get('/iotd', (req, res) => {
//   Iotd.findOne({ user_id: req.cookies.user_id }).then((data) => {
//     res.json(data);
//   });
// });

// app.put('/iotd', (req, res) => {
//   const { user_id } = req.params;
//   Users.findOne({ id: req.cookies.userId }).then((data) => {
//     Users.findById(data.id)
//       .then((user) => {
//         if (!user.favoriteIotds.includes(id)) {
//           userInfo.favoriteIotds = [...user.favoriteIotds, id];
//           Users.updateOne(
//             { _id: user._id },
//             { favoriteIotds: [...user.favoriteIotds, id] },
//           )
//             .then(() => {
//               Iotd.findOne({ userId })
//                 .then((record) => {
//                   Iotd.updateOne(
//                     { userId: req.params.userId }
//                   ).catch((err) => console.log(err));
//                 })
//                 .catch((err) => console.log(err));
//             })
//             .catch((err) => console.log(err));
//         }
//       })
//       .then(() => res.status(200).send())
//       .catch(() => res.status(500).send());
//   });
// });


// error handler
app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development'
    ? err
    : {};

  //   // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
