import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCISSm6c_zLXbllf6sH3m0iZY8E_m4tDrI",
  authDomain: "quizgame-30deb.firebaseapp.com",
  databaseURL: "https://quizgame-30deb-default-rtdb.firebaseio.com",
  projectId: "quizgame-30deb",
  storageBucket: "quizgame-30deb.firebasestorage.app",
  messagingSenderId: "702339230982",
  appId: "1:702339230982:web:f057182482962767090287",
  measurementId: "G-W31P5R7R2L",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const database = getDatabase(app);
