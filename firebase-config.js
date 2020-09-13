var admin = require('firebase-admin');

// var serviceAccount = require(__dirname, './court-queue-prototype-firebase-adminsdk-lfx73-743fd75c66.json');
const serviceAccount = {
  type: "service_account",
  project_id: "court-queue-prototype",
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: "firebase-adminsdk-lfx73@court-queue-prototype.iam.gserviceaccount.com",
  client_id: "105706772957930268457",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lfx73%40court-queue-prototype.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://court-queue-prototype.firebaseio.com"
});

module.exports = admin 