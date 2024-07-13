"use client";

import Cookies from "js-cookie";
import jwt_decode, { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

const ContextData = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // console.log(decoded);
        setUserData(decoded);
        if (decoded?.id) {
          console.log("User is logged in");
        }
      } catch (error) {
        console.error("Error decoding token:", error);

        console.log("User is not logged in");
      }
    } else {
      console.log("User is not logged in");
    }
  }, [token]);
  return (
    <ContextData.Provider value={{ userData, setUserData }}>
      {children}
    </ContextData.Provider>
  );
};

export const useContextData = () => useContext(ContextData);
