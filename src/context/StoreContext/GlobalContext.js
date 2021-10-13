import { createContext, useEffect, useState } from "react";

const initialState = {
  books: [],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState([]);
  }, []);

  return (
    <GlobalContext.Provider value={{ state }}>
      {children}
    </GlobalContext.Provider>
  );
};
