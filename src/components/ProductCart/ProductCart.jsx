import React, { useContext } from "react";
import { CartContext } from "../../App";

const ProductCart = ({ product, handleAddToCart }) => {
  const { id, price, picture, name, category } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="px-5 md:px-16 py-5">
        <img src={picture} alt={name} className="rounded-xl shadow-xl" />
      </div>
      <div className="card-body pt-4 gap-1">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <h4 className="text-lg font-bold">Price: ${price}</h4>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(product)}
            className="font-medium w-full  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
