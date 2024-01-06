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
        <div className="absolute top-0 right-0 bg-[#eae4db96] text-white p-1 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100">
          <button>
            <div className="flex justify-center items-center bg-[#333] text-white w-12 h-12">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={"/"}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Product;
