var admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(Buffer.from(process.env.GOOGLE_CONFIG_BASE64, 'base64').toString('ascii'))),
  databaseURL: "https://court-queue-prototype.firebaseio.com"
});

module.exports = admin 