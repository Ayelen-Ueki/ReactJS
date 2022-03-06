import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBafTwR-98nzkiwaGjWvWUxtaBHcxd4Lm0",
  authDomain: "feelinpasteleria.firebaseapp.com",
  projectId: "feelinpasteleria",
  storageBucket: "feelinpasteleria.appspot.com",
  messagingSenderId: "588262740217",
  appId: "1:588262740217:web:9f0f511f69009f105e9228"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);

