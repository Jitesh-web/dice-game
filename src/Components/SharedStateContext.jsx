// SharedStateContext.js
import React, { createContext, useContext, useState } from "react";

// Create a context for the shared state
const SharedStateContext = createContext();

// Create a provider component
export const SharedStateProvider = ({ children }) => {
  const [scoreValue, setScoreValue] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [validationMessage, setValidationMessage] = useState(false);

  return (
    <SharedStateContext.Provider
      value={{
        scoreValue,
        setScoreValue,
        selectedNumber,
        setSelectedNumber,
        validationMessage,
        setValidationMessage,
      }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};

// Custom hook to use the shared state
export const useSharedState = () => useContext(SharedStateContext);
