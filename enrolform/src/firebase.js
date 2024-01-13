import { getDatabase } from "firebase/database"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdx_HjEYlZPjhADAgpqJHwQWTUfkMhyJ0",
    authDomain: "enrolment-form-7c369.firebaseapp.com",
    databaseURL: "https://enrolment-form-7c369-default-rtdb.firebaseio.com",
    projectId: "enrolment-form-7c369",
    storageBucket: "enrolment-form-7c369.appspot.com",
    messagingSenderId: "800160172540",
    appId: "1:800160172540:web:d6c1de59e86679dd8f8a79",
    measurementId: "G-D4SJK8R96C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);
