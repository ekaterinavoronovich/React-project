import { isAllOf } from '@reduxjs/toolkit';
import React, { useContext, useState } from 'react';

interface MenuContext {
  isOpen: boolean;
  toggleState: () => void;
}

export const MenuContext = React.createContext<MenuContext>({
  isOpen: false,
  toggleState: () => {},
});
export interface ContextProviderProps {
  children: React.ReactNode;
}

export const MenuContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [isOpen, setState] = useState(false);

  const toggleState = () => {
    setState(!isOpen);
  };

  return <MenuContext.Provider value={{ isOpen, toggleState }}>{children}</MenuContext.Provider>;
};
