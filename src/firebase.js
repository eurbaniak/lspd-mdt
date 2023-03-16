import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "lspd-panel-5ecc6.firebaseapp.com",
  projectId: "lspd-panel-5ecc6",
  storageBucket: "lspd-panel-5ecc6.appspot.com",
  messagingSenderId: "412007473879",
  appId: "1:412007473879:web:72709d45d8ef8d8c3a4692",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
