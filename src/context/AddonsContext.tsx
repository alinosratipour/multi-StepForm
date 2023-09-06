// AddonsContext.tsx
import React, { createContext, useContext, useState } from "react";

interface AddonsContextType {
  selectedAddOns: string[];
  setSelectedAddOns: (selectedAddOns: string[]) => void;
}

const AddonsContext = createContext<AddonsContextType | undefined>(undefined);

export const useAddonsContext = () => {
  const context = useContext(AddonsContext);
  if (!context) {
    throw new Error("useAddonsContext must be used within an AddonsProvider");
  }
  return context;
};

// Specify children as a prop in the AddonsProvider component
export const AddonsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  return (
    <AddonsContext.Provider value={{ selectedAddOns, setSelectedAddOns }}>
      {children}
    </AddonsContext.Provider>
  );
};
