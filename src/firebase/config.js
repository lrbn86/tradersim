/**
 * Contains configuration details and initialization of the Cloud Firestore database
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAtEcjkKGSxS_gVtK1YAEkMysRTdjUcDZk",
    authDomain: "tradersim-98814.firebaseapp.com",
    projectId: "tradersim-98814",
    storageBucket: "tradersim-98814.appspot.com",
    messagingSenderId: "263485910954",
    appId: "1:263485910954:web:1e9cf50f06e600ef2585d3"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
