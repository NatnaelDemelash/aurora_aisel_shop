import { createContext, useState } from "react";

export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBarClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen, handleSideBarClose }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
