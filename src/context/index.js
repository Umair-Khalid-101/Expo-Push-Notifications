import React, { useContext, createContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // STATES
  const [expoToken, setExpoToken] = useState();

  return (
    <StateContext.Provider value={{ expoToken, setExpoToken }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
