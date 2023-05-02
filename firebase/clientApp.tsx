// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPrisU9t_I_KWontpGFUpZGK6YouCa-TI",
  authDomain: "fir-pineapple-1165f.firebaseapp.com",
  projectId: "fir-pineapple-1165f",
  storageBucket: "fir-pineapple-1165f.appspot.com",
  messagingSenderId: "475175406597",
  appId: "1:475175406597:web:3d32f02ad22d4a6e61a06c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
