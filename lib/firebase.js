import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyChlo2WUgqdj5OKmWpkxjfba8O7cgoCVrM",
  authDomain: "devops-app-aeae8.firebaseapp.com",
  projectId: "devops-app-aeae8",
  storageBucket: "devops-app-aeae8.firebasestorage.app",
  messagingSenderId: "192182912372",
  appId: "1:192182912372:web:6ea8c187abc84759ba1821",
  measurementId: "G-CKQW816EM8",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
