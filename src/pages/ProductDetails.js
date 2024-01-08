import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single selected product
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if item not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, description, image, price } = product;

  return (
    <section className="h-screen pt-32 pb-32 lg:py-32 flex items-center ">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img src={image} className="max-w-[180px] lg:max-w-sm" />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {" "}
              {title}
            </h1>
            <div className="text-purple-500 font-medium text-xl mb-6">
              ${price}
            </div>
            <p className="mb-8 leading-[1.8rem] text-sm text-gray-500">
              {description}
            </p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="py-4 px-8 bg-primary text-white max-w-[220px] rounded-md shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
