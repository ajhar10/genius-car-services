// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_he7dxFHnW7BWJuti7EhssQ5fqp0xP8A",
    authDomain: "genius-car-services-87d86.firebaseapp.com",
    projectId: "genius-car-services-87d86",
    storageBucket: "genius-car-services-87d86.appspot.com",
    messagingSenderId: "658728266513",
    appId: "1:658728266513:web:74a273ddda9db5fb7a7ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;