'use client'
import { useContext, useState, createContext } from "react";
import Cookies from 'js-cookie';

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('token') || null);

  const onTokenHandler = (data) => {
    setToken(data);
    sessionStorage.setItem('token',data);
    Cookies.set('token', data);
  };

  return (
    <authContext.Provider
      value={{
        onTokenHandler,
        token,
        setToken,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(authContext);
