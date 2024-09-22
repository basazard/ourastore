"use client";
import { createContext, useEffect, useState } from "react";
import { isTokenExpired } from "../utils/auth";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const accessToken = localStorage.getItem("accessToken");
      const decodeToken = jwtDecode(accessToken);
      if (isTokenExpired(accessToken)) {
        localStorage.removeItem("accessToken");
        setAuthenticated(false);
        setRole(null);
      }
      setAuthenticated(true);
      setRole(decodeToken.role);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, role, setRole }}
    >
      {children}
    </AuthContext.Provider>
  );
}
