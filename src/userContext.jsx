import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const value = { user };

  console.log(user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("context must be used withing provider");
  }
  return context;
};

export { UserProvider, useAuth };
