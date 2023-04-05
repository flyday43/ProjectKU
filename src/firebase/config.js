import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDjs2NktKDzndV8FMvUlAlDBFhtANdmfWg",
    authDomain: "test-97e19.firebaseapp.com",
    projectId: "test-97e19",
    storageBucket: "test-97e19.appspot.com",
    messagingSenderId: "281003175315",
    appId: "1:281003175315:web:c16d55c0f5542a5cbf0c66",
    measurementId: "G-3BSGD781S2"
};


firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
