import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCh1Hv1IZ9MfPNXZwaa__6bAUIq-U4iLkk',
  authDomain: 'fir-games-225d2.firebaseapp.com',
  databaseURL: 'https://fir-games-225d2-default-rtdb.firebaseio.com',
  projectId: 'fir-games-225d2',
  storageBucket: 'fir-games-225d2.appspot.com',
  messagingSenderId: '1084487179083',
  appId: '1:1084487179083:web:70acdec00a9153be2b26ce'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
