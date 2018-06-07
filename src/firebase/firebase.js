
import * as firebase from 'firebase';

const prodConfig= {
  apiKey: "AIzaSyAPz0kaEEIqkhV8xO3XmFvK9LUaPhctRKs",
  authDomain: "knowledge-b-production-db.firebaseapp.com",
  databaseURL: "https://knowledge-b-production-db.firebaseio.com",
  projectId: "knowledge-b-production-db",
  storageBucket: "knowledge-b-production-db.appspot.com",
  messagingSenderId: "639552041536"
};


const devConfig= {
    apiKey: "AIzaSyBSvLOAJJdsM55p6skiQvbMiL_fOkzB5kM",
    authDomain: "knowledge-booth-c7a5c.firebaseapp.com",
    databaseURL: "https://knowledge-booth-c7a5c.firebaseio.com",
    projectId: "knowledge-booth-c7a5c",
    storageBucket: "knowledge-booth-c7a5c.appspot.com",
    messagingSenderId: "1093576867892"
  };

  const config = process.env.NODE_ENV === 'production'
  ?prodConfig
  :devConfig;

  if (!firebase.apps.length) {
  firebase.initializeApp(config);

}
const db = firebase.database();
const auth = firebase.auth();
export {
    db,
    auth,
  };