import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import { clearToDb, getToDb, removeToDb } from "../../Utilites/fakeDb";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Cart = () => {
  const productData = useLoaderData();
  // const [cartItem, setCartItem] = useState([]);
  const [Cart, setCart] = useContext(CartContext);

  useEffect(() => {
    const storeData = getToDb();
    const storeCart = [];
    for (const id in storeData) {
      const addToCartItem = productData.find((product) => product.id === id);
      if (addToCartItem) {
        const quantityValue = storeData[id];
        addToCartItem["quantity"] = quantityValue;
        storeCart.push(addToCartItem);
      }
    }
    setCart(storeCart);
  }, []);

  let totalAmount = 0;
  for (const item of Cart) {
    totalAmount = totalAmount + item.price * item.quantity;
  }

  const handleClearCart = () => {
    clearToDb();
    setCart([]);
  };

  const handleRemoveItem = (id) => {
    const restProduct = Cart.filter((product) => product.id !== id);
    // setCartItem(restProduct)
    setCart(restProduct);
    removeToDb(id);
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="max-w-full md:w-10/12 mx-auto">
        <div className="flex flex-col max-w-full md:w-8/12 mx-auto p-6 space-y-4 sm:p-10 ">
          <h2 className="text-xl font-semibold">
            {Cart.length !== 0 ? "Review Cart Items" : "Empty Cart !!!"}
          </h2>
          <ul className="divide-y-2 flex flex-col">
            {Cart.map((product) => (
              <ReviewItem
                handleRemoveItem={handleRemoveItem}
                key={product.id}
                product={product}
              ></ReviewItem>
            ))}
          </ul>
          <div className="space-y-1">
            <h3 className="text-right">
              Total amount:{" "}
              <span className="text-lg font-semibold">${totalAmount}</span>
            </h3>
            <p className="text-sm font-light text-right text-gray-400">
              Not including taxes and shipping costs
            </p>
            <div>
              <div className="flex flex-col text-center md:flex-row  justify-end mt-5">
                {Cart.length === 0 ? (
                  <Link to="/">
                    <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">
                      Back To Home
                    </button>
                  </Link>
                ) : (
                  <Link>
                    <button
                      onClick={handleClearCart}
                      className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200"
                    >
                      Clear Cart
                    </button>
                  </Link>
                )}
                <Link to="/checkout">
                  <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full  text-gray-700 hover:bg-cyan-400 hover:border-transparent border-2 border-cyan-200">
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
