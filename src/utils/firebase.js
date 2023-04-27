// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// var admin = require("firebase-admin");

// var serviceAccount = require("./printf-website-firebase-adminsdk-byp5h-8adba2b4a4.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://printf-website-default-rtdb.firebaseio.com"
// });

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA8O1yMP7SaCaVL9JFTTHONYEtGr83xKg4",
//   authDomain: "printf-website.firebaseapp.com",
//   projectId: "printf-website",
//   storageBucket: "printf-website.appspot.com",
//   messagingSenderId: "647065819645",
//   appId: "1:647065819645:web:ad9ddc5648a700de3a6194",
//   measurementId: "G-ERPWL44LB7"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const app = initializeApp(firebaseConfig);
const auth = getAuth()
const storage = getStorage(app);
const db = getDatabase(app);
export { storage, db };

export const signOutAuth = () => {
    return signOut(auth)
}

export const onAuthStateChangedListner = (callback) => {
    return onAuthStateChanged(auth, callback)
}

export function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}