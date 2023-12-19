  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCK51H8qCw61uf25Fp_qHsORWaxD6P9cz8",
  authDomain: "snapgrid-5059c.firebaseapp.com",
  projectId: "snapgrid-5059c",
  storageBucket: "snapgrid-5059c.appspot.com",
  messagingSenderId: "34987375882",
  appId: "1:34987375882:web:88b4052c1cbf2aa45f8ef3",
  measurementId: "G-STEK33H644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }