// src/SideMenuContext.js
import { createContext, useContext, useState } from 'react';

const SideMenuContext = createContext();

export const useSideMenu = () => {
  return useContext(SideMenuContext);
};

export const SideMenuProvider = ({ children }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [unitInfo, setUnitInfo] = useState({ number: 1 });

  const handleOpen = (info) => {
    setUnitInfo(info);
    setSideMenuOpen(true);
  };

  const handleClose = () => {
    setSideMenuOpen(false);
  };

  return (
    <SideMenuContext.Provider value={{ sideMenuOpen, unitInfo, handleOpen, handleClose }}>
      {children}
    </SideMenuContext.Provider>
  );
};
