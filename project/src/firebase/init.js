import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpnvxuzTIOh4OVTrEBIFsFNkBcDoTZFrI",
  authDomain: "kedaireka-d4ad3.firebaseapp.com",
  projectId: "kedaireka-d4ad3",
  storageBucket: "kedaireka-d4ad3.appspot.com",
  messagingSenderId: "274924105585",
  appId: "1:274924105585:web:ff10021e941a26354b50d0",
};

// init firebase
const app = initializeApp(firebaseConfig);
// init firestore service
const db = getFirestore(app);
export default db;
