import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDggEpBBTFzh_rdhI_LSRXWP7_JAhK6p5I",
    authDomain: "linktoqr-6cdea.firebaseapp.com",
    projectId: "linktoqr-6cdea",
    storageBucket: "linktoqr-6cdea.appspot.com",
    messagingSenderId: "1097747273136",
    appId: "1:1097747273136:web:63ea2fc94d6441bf1d7275"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);