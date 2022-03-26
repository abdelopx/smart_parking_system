import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF1nCnV1Wdr_vU-UKoHUnzNIzRpZmWt5A",
  authDomain: "smart-parking-system-1d245.firebaseapp.com",
  projectId: "smart-parking-system-1d245",
  storageBucket: "smart-parking-system-1d245.appspot.com",
  messagingSenderId: "1070305488334",
  appId: "1:1070305488334:web:13ef01a3c806ace8de0f9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getFirestore(app); 


