import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInit = () => {
    const initFirebase = initializeApp(firebaseConfig);
}

export default firebaseInit