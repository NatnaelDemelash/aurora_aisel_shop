import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SidebarContext";
import CartItem from "../components/CartItem";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import { VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleSideBarClose } = useContext(SideBarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white z-20 h-full fixed top-0 shadow-2xl md:w-[35vw] 
      xl:max-w-[30vw] px-4 lg:px-[35px] transition-all duration-300`}
    >
      <div className="flex justify-between items-center py-6 border-b-2">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag({itemAmount})
        </div>
        <div className="cursor-pointer w-8 h-8" onClick={handleSideBarClose}>
          <IoIosArrowRoundForward className="text-4xl" />
        </div>
      </div>

      {/* Cart Item */}
      <div className="flex flex-col gap-y-2 h-[450px] lg:h-[500px] overflow-y-auto overflow-x-hidden border-b-2">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      {/* total */}
      <div className="flex w-full justify-between items-center py-4">
        <div className="flex flex-col justify-start gap-2">
          <p className="font-medium text-sm uppercase">Total Price:</p>
          <div className="font-semibold "> ${parseFloat(total).toFixed(2)}</div>
        </div>
        <div
          onClick={() => clearCart()}
          className="text-xl h-10 w-10 bg-red-500 flex justify-center 
          items-center text-white cursor-pointer rounded-lg"
        >
          <VscTrash />
        </div>
      </div>
      <Link
        to={"/"}
        className="bg-gray-200 text-primary font-medium w-full p-3 flex justify-center items-center mb-3"
      >
        View Cart
      </Link>
      <Link
        to={"/"}
        className="bg-primary text-white font-medium p-3 flex justify-center items-center mb-10"
      >
        Checkout
      </Link>
    </div>
  );
};

export default Sidebar;
