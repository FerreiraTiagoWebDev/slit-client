// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFMInE8nZKbOycJoE1Y3HBDblLRSFAxkg",
  authDomain: "slitshop.firebaseapp.com",
  projectId: "slitshop",
  storageBucket: "slitshop.appspot.com",
  messagingSenderId: "1057650773288",
  appId: "1:1057650773288:web:6875077248a6c7695bd41d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;