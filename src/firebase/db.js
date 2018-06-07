// interface to firebase realtime database
import { db } from './firebase';

//user API

 export const doCreateUser = (id, username, email) =>
 db.ref(`users/${id}`).set({
     username,
     email,
 });
// retrirve all users
 export const onceGetUsers = () =>
 db.ref(`users`).once(`value`);