import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Logout user
  const logout = () => {
    return signOut(auth);
  };

  // ✅ Observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    // cleanup
    return () => unsubscribe();
  }, []); // <-- dependency empty রাখো

  const AuthData = {
    user,
    setUser,
    createUser,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={AuthData}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
