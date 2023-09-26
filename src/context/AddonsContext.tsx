// AddonsContext.tsx

import React, { createContext, useContext, useState } from "react";

export interface Addon {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

export interface AddonsContextType {
  selectedAddOns: Addon[];
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

export const AddonsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedAddOns, setSelectedAddOns] = useState<Addon[]>([]);

  const contextValue: AddonsContextType = {
    selectedAddOns,
    setSelectedAddOns, // Provide setSelectedAddOns here
  };

  return (
    <AddonsContext.Provider value={contextValue}>
      {children}
    </AddonsContext.Provider>
  );
};
