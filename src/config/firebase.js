import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBr_n1i02di19iokZmse5B8YCsDbHGyiaE",
  authDomain: "fir-course-38ebb.firebaseapp.com",
  projectId: "fir-course-38ebb",
  storageBucket: "fir-course-38ebb.appspot.com",
  messagingSenderId: "303631565779",
  appId: "1:303631565779:web:298ab18eac6c2d98746526",
  measurementId: "G-8GQ76PCQ2G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);