'use client'
import { useContext, useState } from "react";
import { createContext } from "react";
const authContext = createContext();


const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const onTokenHandeler = (data) => {
    setToken(data);
    sessionStorage.setItem('token',data);
  };
  return (
    <authContext.Provider
      value={{
        onTokenHandeler,
        token: token,
        setToken: setToken,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
export const useAuthContext = () => useContext(authContext);