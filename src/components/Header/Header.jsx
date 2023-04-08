import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../App";
import { getToDb } from "../../Utilites/fakeDb";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [Cart, setCart] = useContext(CartContext);
  const productData = useLoaderData();
  const [isToggle, setToggle] = useState(false);

  let countItem = 0;

  for (const item of Cart) {
    countItem += item.quantity;
  }

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

  return (
    <header className="bg-white">
      <nav className=" max-w-full px-3 md:px-0 md:w-10/12 py-6 mx-auto flex gap-4 flex-col md:flex-row justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <h3 className="md:text-2xl shrink-0 font-bold text-slate-700">
              HOME GADGET
            </h3>
          </div>
          <div className="md:hidden flex items-center gap-5">
          <Link className="text-lg relative text-slate-700" to="/cart">
              <ShoppingCartIcon className="w-6 h-6 text-cyan-400"></ShoppingCartIcon>
              <span className="font-semibold px-2 py-1 rounded-full  absolute -top-4 -right-4">
                {countItem}
              </span>
            </Link>
            <button onClick={() => setToggle(!isToggle)}>
              {
                isToggle ? 
                <XMarkIcon className="w-8 h-8 text-gray-600"></XMarkIcon>
                :
              <Bars3Icon className="w-8 h-8 text-gray-600"></Bars3Icon>
              }
            </button>
            
          </div>
        </div>
        <ul
          className={`flex items-center bg-white justify-end md:static absolute duration-300 z-20 md:z-0 md:pb-0 pb-5 w-full flex-col md:flex-row gap-3 left-0 md:gap-6 ${isToggle ?  "top-24" : " -top-40"}`}
        >
          <li>
            <NavLink className="text-lg text-slate-700" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-lg text-slate-700" to="/shop">
              Shop
            </NavLink>
          </li>
          <li className="hidden md:block">
            <Link className="text-lg relative text-slate-700" to="/cart">
              <ShoppingCartIcon className="w-6 h-6 text-cyan-400"></ShoppingCartIcon>
              <span className="font-semibold px-2 py-1 rounded-full  absolute -top-4 -right-4">
                {countItem}
              </span>
            </Link>
          </li>
          <li>
            <NavLink className="text-lg text-slate-700" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
