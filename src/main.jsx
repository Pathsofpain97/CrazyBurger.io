import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC_kXagLDwtpHzJ4fWrl4lxUhZ1NTGhxBc",
  authDomain: "crazy-burger-43961.firebaseapp.com",
  projectId: "crazy-burger-43961",
  storageBucket: "crazy-burger-43961.appspot.com",
  messagingSenderId: "589081313273",
  appId: "1:589081313273:web:b5ea4310d0b48968a14728"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(<App />)
