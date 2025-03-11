import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// 🔥 ЗАДЪЛЖИТЕЛНО: Замени с твоите реални данни от Firebase Console!
const firebaseConfig = {
  apiKey: "AIzaSyDlmDU0ua5zGeFmPX5qRu-tbixxuuO3EnU",
  authDomain: "znanie-979b6.firebaseapp.com",
  projectId: "znanie-979b6",
  storageBucket: "znanie-979b6.firebasestorage.app",
  messagingSenderId: "937206528319",
  appId: "1:937206528319:web:32b5f14c7b369d44e6fb8a",
  measurementId: "G-N6BW458C5B"
};

// ✅ Инициализиране на Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
