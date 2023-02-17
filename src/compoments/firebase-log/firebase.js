import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjlj4-M6tmSoXs5WHOMXify9Igf4MJ5Hk",
  authDomain: "retink-auth-1831a.firebaseapp.com",
  projectId: "retink-auth-1831a",
  storageBucket: "retink-auth-1831a.appspot.com",
  messagingSenderId: "344833958034",
  appId: "1:344833958034:web:cb2447b96132076967864b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app