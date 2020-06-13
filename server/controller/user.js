const twilio = require('twilio');

const User = require('../models/User');

exports.postUser = (req, res) => {
  // console.log(req.body.phoneNo);
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = new twilio(accountSid, authToken);

  // send phone verification code to user
  client.verify.services('VA27bd51ffab11c319d83a98edde7b23d3')
    .verifications
    .create({ to: '+60164742290', channel: 'sms' })
    .then(verification => console.log(verification.status));

  res.send('Phone verifiction code is sent.');
};

exports.verifyUser = (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = new twilio(accountSid, authToken);

  // verify code from user
  client.verify.services('VA27bd51ffab11c319d83a98edde7b23d3')
    .verificationChecks
    .create({ to: '+60164742290', code: req.body.code })
    .then(verification_check => {
      console.log(verification_check.status)
      if (verification_check.status == 'approved') {
        // success case
      }
      else if (verification_check.status == 'pending') {
        // pending case
      }
      else if (verification_check.status == 'denied') {
        // denied case
      }
    });

  res.send('Verifying user');
}


