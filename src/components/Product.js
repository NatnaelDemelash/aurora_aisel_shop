import React from "react";

import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, image, category, price } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition ">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt="product image"
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-0 right-0 text-white p-1 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center bg-[#333] text-white w-12 h-12">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* Category, Price, title */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`} className="font-semibold mb-1">
          {title}
        </Link>
        <h2 className="font-semibold mt-2">${price}</h2>
      </div>
    </div>
  );
};

export default Product;
