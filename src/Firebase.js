import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_17INSpzWYkT1FyKFQti6UDkcDmHnm3s",
  authDomain: "teacher-portal-schools.firebaseapp.com",
  projectId: "teacher-portal-schools",
  storageBucket: "teacher-portal-schools.appspot.com",
  messagingSenderId: "174506174159",
  appId: "1:174506174159:web:0806c4ce6ca3d7fad0b9ba",
  measurementId: "G-WJ6VHFYB0J",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;


