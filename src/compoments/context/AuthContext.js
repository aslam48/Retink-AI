import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase-log/firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe= onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        setUser(currentUser)
    })
    return () => {
        unSubscribe()
    }
  },[])

  return (
    <UserContext.Provider value={{createUser, user}}>
        {children}
        </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
