import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD2422vDU_Dnf5e7aP68BIT8sD4G5xsQqI",
    authDomain: "quizapp-f939b.firebaseapp.com",
    projectId: "quizapp-f939b",
    storageBucket: "quizapp-f939b.appspot.com",
    messagingSenderId: "372674342919",
    appId: "1:372674342919:web:c2ff7636560e1103c5faa2"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;