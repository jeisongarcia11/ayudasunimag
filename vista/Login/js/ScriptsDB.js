import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
//import { getStorage, ref, uploadBytes , getDownloadURL }from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";
import {getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where, getDocs} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
//import { getDatabase,ref as ref2 , onValue, set, remove} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyABibPc2s_rGzQ2SMbT860-OLPUmXErQLY",
    authDomain: "complementate-unimag.firebaseapp.com",
    projectId: "complementate-unimag",
    storageBucket: "complementate-unimag.appspot.com",
    messagingSenderId: "354423559524",
    appId: "1:354423559524:web:88051648574828e31e9671"
};

// Export Firebase
const app = initializeApp(firebaseConfig);
//const storage = getStorage(app);
const db = getFirestore();
//const rdb = getDatabase()

export{
    db, doc, getDoc,  setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where, getDocs, app
}
