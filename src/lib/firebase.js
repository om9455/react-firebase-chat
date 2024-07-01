
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-9bfec.firebaseapp.com",
  projectId: "reactchat-9bfec",
  storageBucket: "reactchat-9bfec.appspot.com",
  messagingSenderId: "847635560926",
  appId: "1:847635560926:web:7d0df7ff34c702bc9d454f",
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()
