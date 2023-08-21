// import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

// interface SelectedCardContextType {
//     selectedCard: number;
//     setSelectedCard: Dispatch<SetStateAction<number>>;
//   }
  
//   export const SelectedCardContext = createContext<SelectedCardContextType>({
//     selectedCard: -1,
//     setSelectedCard: () => {},
//   });
  
//   export const SelectedCardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [selectedCard, setSelectedCard] = useState<number>(-1);
  
//     return (
//       <SelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
//         {children}
//       </SelectedCardContext.Provider>
//     );
//   };