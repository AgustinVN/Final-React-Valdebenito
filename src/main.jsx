import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKfFDRxcahO3riSobnu23I_o1Q98CcaB0",
  authDomain: "practicareact-f4f14.firebaseapp.com",
  projectId: "practicareact-f4f14",
  storageBucket: "practicareact-f4f14.appspot.com",
  messagingSenderId: "337657192723",
  appId: "1:337657192723:web:b1a4804803ee5b3a177ae6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
