import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB808IYyNdYizio-fNszlxSmoWUz4-dlvo",
  authDomain: "story-hub-p70-or-p71.firebaseapp.com",
  databaseURL: "https://story-hub-p70-or-p71-default-rtdb.firebaseio.com",
  projectId: "story-hub-p70-or-p71",
  storageBucket: "story-hub-p70-or-p71.appspot.com",
  messagingSenderId: "646128645310",
  appId: "1:646128645310:web:2da750b8250d7d84125aef"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
