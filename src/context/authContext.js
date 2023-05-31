import { createContext, useState } from "react";

export const userContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <userContext.Provider value={{ token, setToken }}>
      {children}
    </userContext.Provider>
  );
};

export default AuthProvider;
