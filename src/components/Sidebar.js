import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SidebarContext";

import { IoIosArrowRoundForward } from "react-icons/io";

const Sidebar = () => {
  const { isOpen, handleSideBarClose } = useContext(SideBarContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white h-full fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] px-4 lg:px-[35px] transition-all duration-300`}
    >
      <div className="flex justify-between items-center py-6 border-b-2">
        <div className="uppercase text-sm font-semibold">Shopping Bag(0)</div>
        <div className="cursor-pointer w-8 h-8" onClick={handleSideBarClose}>
          <IoIosArrowRoundForward className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
