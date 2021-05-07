const nodemailer = require('nodemailer');
const CronJob = require('cron').CronJob;

const emailBlast = (credA, credB) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: credA,
      pass: credB
    }
  });

  //   const weeklyEmail = new CronJob('5 4 * * sun', () => {
  const weeklyEmail = new CronJob('*/5 * * * *', async () => {

    const body = {
      from: 'solxrweekly@gmail.com',
      to: '',
      subject: 'testing email list',
      text: 'wow'
    };
    
    transporter.sendMail(body, function(err, info) {
      if (err) {
        console.warn(err);
      } else {
        console.info('email success', info.response);
      }
    });
  });
  weeklyEmail.start();
};

module.exports = {
  emailBlast
};
