import React, { useState, useEffect, useContext, createContext } from "react";
import { quickBuy, auth as quickBuyAuth, db as quickBuyDb } from "../config/quick-buy";

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  console.log("useAuth");
  return useContext(authContext);
};

const authContext = createContext();


function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentUser = () => {
    quickBuyAuth.currentUser?.uid
      ? quickBuyDb
          .collection("Users")
          .doc(quickBuyAuth.currentUser.uid)
          .get()
          .then((doc) => {
            setUser(doc.data());
            setLoading(false);
          })
      : setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = quickBuy
      .auth()
      .onAuthStateChanged(() => getCurrentUser());
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    setUser,
  };
}
