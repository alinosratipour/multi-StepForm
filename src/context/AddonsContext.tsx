import React, { createContext, useContext, useState } from "react";


interface Addon {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

interface AddonsContextType {
  selectedAddOns: Addon[]; // Make sure Addon is correctly defined
  setSelectedAddOns: (selectedAddOns: Addon[]) => void;
}

const AddonsContext = createContext<AddonsContextType | undefined>(undefined);

export const useAddonsContext = () => {
  const context = useContext(AddonsContext);
  if (!context) {
    throw new Error("useAddonsContext must be used within an AddonsProvider");
  }
  return context;
};

export const AddonsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<Addon[]>([]);

  return (
    <AddonsContext.Provider value={{ selectedAddOns, setSelectedAddOns }}>
      {children}
    </AddonsContext.Provider>
  );
};
