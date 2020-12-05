import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAcBTsPYakRgRi5v_qJKgWJ4Fu2fl8mYL4",
    authDomain: "whatsapp-clone-8818d.firebaseapp.com",
    projectId: "whatsapp-clone-8818d",
    storageBucket: "whatsapp-clone-8818d.appspot.com",
    messagingSenderId: "469803364466",
    appId: "1:469803364466:web:3647d82ff90fef767392eb",
    measurementId: "G-4X8N0BK082"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db