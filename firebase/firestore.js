// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNKT3ECKMYZVha6P3RGDsCGJpTJlDHnPA",
  authDomain: "adamah-3b5f6.firebaseapp.com",
  projectId: "adamah-3b5f6",
  storageBucket: "adamah-3b5f6.appspot.com",
  messagingSenderId: "892444154630",
  appId: "1:892444154630:web:11393d4bfccfc15cfa1c87",
  measurementId: "G-KPL02483VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Create a root reference
const storage = getStorage();

// Create a reference to 'mountains.jpg'
const flowingRef = ref(storage, 'flowing.jpeg');

// Create a reference to 'images/mountains.jpg'
const flowingImagesRef = ref(storage, 'images/bowls/flowing.jpeg');

// While the file names are the same, the references point to different files
flowingRef.name === flowingImagesRef.name;           // true
flowingRef.fullPath === flowingImagesRef.fullPath;   // false 