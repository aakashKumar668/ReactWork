import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCSXH29zWGb7KxF9u3DE599czeqZkcEnrk",
    authDomain: "mycornerminiblog.firebaseapp.com",
    projectId: "mycornerminiblog",
    storageBucket: "mycornerminiblog.firebasestorage.app",
    messagingSenderId: "301848567631",
    appId: "1:301848567631:web:88a82a638e7c1e0605af3a",
    measurementId: "G-0SGZEQEDQ0"
}
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
