import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [savedItems, setSavedItems] = useState([]);

  const toggleSave = (item) => {
    const exists = savedItems.find((saved) => saved.id === item.id);

    if (exists) {
      setSavedItems(savedItems.filter((saved) => saved.id !== item.id));
    } else {
      setSavedItems([...savedItems, item]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        savedItems,
        toggleSave,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);