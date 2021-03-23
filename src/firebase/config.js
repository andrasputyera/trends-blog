import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCs_TnpDa7X3WVRY5f-msBr7SX68HICTeY",
    authDomain: "vue-3-trends-blog.firebaseapp.com",
    projectId: "vue-3-trends-blog",
    storageBucket: "vue-3-trends-blog.appspot.com",
    messagingSenderId: "344028403687",
    appId: "1:344028403687:web:d682eb59e3d5add1a5cf42"
  };

  // Initialize firebase
  firebase.initializeApp(firebaseConfig)

  // Initialize firestore service
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }