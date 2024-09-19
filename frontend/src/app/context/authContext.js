"use client";
import { createContext, useEffect, useState } from "react";
import { isTokenExpired } from "../utils/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const accessToken = localStorage.getItem("accessToken");
      if (isTokenExpired(accessToken)) {
        localStorage.removeItem("accessToken");
        setAuthenticated(false);
      }
      setAuthenticated(true);
    }
    setAuthenticated(false);
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
