import React, { useContext, useState, useEffect } from "react";
import {
  auth,
  createUser,
  signInUser,
  resetPassword,
  changeEmail,
  changePassword,
} from "../fireBase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loaded, setLoaded] = useState(false);

  const signUp = (email, password) => {
    return createUser(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInUser(auth, email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  const resetUserPassword = (email) => {
    return resetPassword(auth, email);
  };

  const updateEmail = (email) => {
    return changeEmail(auth.currentUser, email);
  };

  const updatePassword = (password) => {
    return changePassword(auth.currentUser, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoaded(true);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetUserPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {loaded && children}
    </AuthContext.Provider>
  );
};
