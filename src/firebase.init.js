// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoQ1DYPhjHHgv6NpOzdcnk6jxLaeoS6yI",
    authDomain: "x-fitt-gym.firebaseapp.com",
    projectId: "x-fitt-gym",
    storageBucket: "x-fitt-gym.appspot.com",
    messagingSenderId: "994423857992",
    appId: "1:994423857992:web:2b5590365210b8b15c497d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;