import React from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  // destructuring item props
  const { id, title, image, price, amount } = item;

  return (
    <div className=" flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 font-light text-gray-500">
      <div className="flex items-center gap-x-4 w-full min-h-[120px]">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img src={image} alt="Cart item image" className="max-w-[60px]" />
        </Link>

        <div className="w-full flex flex-col">
          {/* title and remove icons */}
          <div className="flex justify-between items-center mb-2 ">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase max-w-[240px] cursor-pointer font-medium hover:underline"
            >
              {title}
            </Link>

            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500" />
            </div>
          </div>

          {/* qunatity, price */}
          <div className="flex gap-y-2 h-[36px] text-sm">
            {/* qty */}

            <div className="flex flex-1 max-w-[100px] bg-[#333] text-white items-center h-full font-medium">
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>

            {/* item price */}
            <div className="flex-1 flex justify-around items-center">
              ${price}
            </div>

            {/* final price */}
            <div className="flex flex-1 items-center justify-end font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
