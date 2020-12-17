import app from 'firebase/app';
import 'firebase/auth';

import 'firebase/database';
const config = {

  apiKey: "AIzaSyC5hVlr672LqHE6wAG34Sa5D0XxyC-Cxow",
  authDomain: "auth-fec89.firebaseapp.com",
  databaseURL: "https://auth-fec89-default-rtdb.firebaseio.com",
  projectId: "auth-fec89",
  storageBucket: "auth-fec89.appspot.com",
  messagingSenderId: "96933822347",
  appId: "1:96933822347:web:67850af0edf0f18d1b398e",
  measurementId: "G-0RM1FX9QQY"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();
    
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
    

      // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

}

export default Firebase;



