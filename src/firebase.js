// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEOYlHZe5i2ERcnnC5wYjMQPuEPeV2TwY",
  authDomain: "web-bussines.firebaseapp.com",
  projectId: "web-bussines",
  storageBucket: "web-bussines.appspot.com",
  messagingSenderId: "1045014969627",
  appId: "1:1045014969627:web:415316d9054e926918a7be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}