import app from 'firebase/app';
import 'firebase/auth';

import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCRYfIRnsoOBccOJC8RV_KrTERVoJV1CRM",
  authDomain: "fir-login-496e8.firebaseapp.com",
  projectId: "fir-login-496e8",
  storageBucket: "fir-login-496e8.appspot.com",
  messagingSenderId: "658349646822",
  appId: "1:658349646822:web:761d7b65c85bce84c6ec27",
  measurementId: "G-Y3JHMDZYLT"
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



