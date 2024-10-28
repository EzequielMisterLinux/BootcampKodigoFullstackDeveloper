// api/Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Eliminar comillas adicionales
Object.keys(firebaseConfig).forEach(key => {
  if (typeof firebaseConfig[key] === 'string') {
    firebaseConfig[key] = firebaseConfig[key].replace(/^["']|["']$/g, '');
  }
});

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

console.log("Firebase inicializado con la configuración:", firebaseConfig);