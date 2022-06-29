import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";   //extra in this file need to import in another file
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAutlYWcyeIuZb5iK2JgwYGVB67xMJOnUw",
  authDomain: "crudbynaveed.firebaseapp.com",
  projectId: "crudbynaveed",
  storageBucket: "crudbynaveed.appspot.com",
  messagingSenderId: "971897390085",
  appId: "1:971897390085:web:f9f52fa0cd13d04578c86c",
  measurementId: "G-WEVMDM63V7"
}; 

// Initialize Firebase    
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// export  const db = getFirestore.firestore();
export const auth = getAuth(app)
// export { firestore, auth }