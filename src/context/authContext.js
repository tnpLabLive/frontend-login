import { useState } from "react";
import { userContext } from "./createContext";

function AuthProvider({ children }) {
  const [state, setState] = useState("tnplab.in");
  const [data, setData] = useState("");

  return (
    <userContext.Provider value={{ state, setState, data, setData }}>
      {children}
    </userContext.Provider>
  );
}

export default AuthProvider;
