import firebase from 'firebase'

if(!firebase.apps.length){
var config = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
  };
  firebase.initializeApp(config);
}

export default firebase
