import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCWVb79jGv6knA7BOCxLQ3JzpIskl8OmQg",
  authDomain: "vite-contact-41e23.firebaseapp.com",
  projectId: "vite-contact-41e23",
  storageBucket: "vite-contact-41e23.appspot.com",
  messagingSenderId: "229973407952",
  appId: "1:229973407952:web:9e993b6c63f59dd0ff86d5"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);