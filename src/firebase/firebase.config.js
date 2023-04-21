// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCSm36UfHhi2gDiAVRyMoq8sFgAelQ5ME",
  authDomain: "dragon-news-fc319.firebaseapp.com",
  projectId: "dragon-news-fc319",
  storageBucket: "dragon-news-fc319.appspot.com",
  messagingSenderId: "347108045758",
  appId: "1:347108045758:web:6bda00ce9214bd58387fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;