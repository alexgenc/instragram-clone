import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBWBNPsMboYHrbYdoplGZ7u3Y80Nm4jIUc",
  authDomain: "instagram-clone-2157f.firebaseapp.com",
  projectId: "instagram-clone-2157f",
  storageBucket: "instagram-clone-2157f.appspot.com",
  messagingSenderId: "763976837291",
  appId: "1:763976837291:web:32bea38734885df234efee"
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };