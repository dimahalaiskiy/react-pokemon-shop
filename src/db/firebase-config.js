import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQpDpoZUyfJnQu8sfzinQF4N5folS2g84",
    authDomain: "pokemon-shop-e9c71.firebaseapp.com",
    projectId: "pokemon-shop-e9c71",
    storageBucket: "pokemon-shop-e9c71.appspot.com",
    messagingSenderId: "330904918805",
    appId: "1:330904918805:web:1fb6657299c782c04ba71c",
    measurementId: "G-VQCGE485QG",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
