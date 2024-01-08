import React, { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md py-4" : "bg-none py-6"
      } fixed  w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to={"/"}>
          <div className="flex gap-1 items-center">
            <img src={logo} className="w-[50px]" />
            <p className="text-sm font-semibold uppercase">Aurora_Aisel</p>
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div
            className="bg-[#333] absolute -right-2 -bottom-2 text-[14px] h-[20px] w-[20px] rounded-full 
          text-white flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
