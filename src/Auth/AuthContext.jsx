import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import app from "./Firebase.init";
export const AuthProvider = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [getId, setGetId] = useState(null);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const [loader, setLoader] = useState(true);
  const user1 = auth.currentUser;
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, photoUrl) => {
    setLoader(true);
    return updateProfile(user1, {
      displayName: { name },
      photoURL: { photoUrl },
    })
      .then(() => {
        setLoader(true);
        toast("Register SuccessFull");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleSignIn = () => {
    setLoader(true);

    return signInWithRedirect(auth, provider);
  };
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userChange) => {
      setUser(userChange);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authProvid = {
    user,
    getId,
    setGetId,

    createUser,
    login,
    logOut,
    googleSignIn,
   
    updateUser,
    loader,
  };
  return (
    <AuthProvider.Provider value={authProvid}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
