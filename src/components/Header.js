import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  return (
    <div>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <BsBag className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
