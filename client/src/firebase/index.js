// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJY5zduPrUQJOWnrWzR0Q90Iksjua5ny0",
  authDomain: "space-creator-a0cd3.firebaseapp.com",
  projectId: "space-creator-a0cd3",
  storageBucket: "space-creator-a0cd3.appspot.com",
  messagingSenderId: "30948786508",
  appId: "1:30948786508:web:ca854edea2c7a2a5f70fe9",
  measurementId: "G-Z1H4QE7C1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(firebaseApp);

export { storage };