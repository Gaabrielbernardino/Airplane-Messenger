import firebase from 'firebase/app';
import 'firebase/auth';


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBBHW6zlF90190RUh8xgf9XvUTAnGclRg8",
    authDomain: "airplane-messenger-7edb5.firebaseapp.com",
    projectId: "airplane-messenger-7edb5",
    storageBucket: "airplane-messenger-7edb5.appspot.com",
    messagingSenderId: "69170538208",
    appId: "1:69170538208:web:8b5ce2dee4e130da671285",
    measurementId: "G-B7QNJNNEKG"
}).auth();