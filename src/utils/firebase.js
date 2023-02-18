// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-wpahhbKrlkvH6yw3_dOklP22OyVMkwg",
    authDomain: "techitrons-651ab.firebaseapp.com",
    projectId: "techitrons-651ab",
    storageBucket: "techitrons-651ab.appspot.com",
    messagingSenderId: "589276904495",
    appId: "1:589276904495:web:7af439f56f486c71d59ada"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getDatabase(app);
export { storage, db };