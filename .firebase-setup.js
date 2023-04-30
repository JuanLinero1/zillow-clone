import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH9aPNSQa0CLdKL_yG1jLIe5cBlyLvHf4",
  authDomain: "zillow-account.firebaseapp.com",
  projectId: "zillow-account",
  storageBucket: "zillow-account.appspot.com",
  messagingSenderId: "324064896353",
  appId: "1:324064896353:web:2bbc267b07ea715980d120",
  measurementId: "G-L1N0GT48K1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

