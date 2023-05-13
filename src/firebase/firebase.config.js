// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_3J3h9DQeojOURUiCq0aPthJl3Jbd-Us",
  authDomain: "cars-doctor-dbf75.firebaseapp.com",
  projectId: "cars-doctor-dbf75",
  storageBucket: "cars-doctor-dbf75.appspot.com",
  messagingSenderId: "61646983435",
  appId: "1:61646983435:web:620a29a56529029f84120e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;