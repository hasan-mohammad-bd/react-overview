// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOR56zbAFSpK1IHdVeQt16P0ylkP0wjSE",
  authDomain: "genius-car-services-e1a39.firebaseapp.com",
  databaseURL: "https://genius-car-services-e1a39-default-rtdb.firebaseio.com",
  projectId: "genius-car-services-e1a39",
  storageBucket: "genius-car-services-e1a39.appspot.com",
  messagingSenderId: "825839884379",
  appId: "1:825839884379:web:4f5e12e9a6f314ea56c77e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
