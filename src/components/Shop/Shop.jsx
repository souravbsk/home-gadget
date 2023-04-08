import React, { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCart from "../ProductCart/ProductCart";
import { CartContext } from "../../App";
import { addToDb, getToDb } from "../../Utilites/fakeDb";

const Shop = () => {
  const products = useLoaderData();
  const [Cart, setCart] = useContext(CartContext);
  const handleAddToCart = (product) => {
    let updateCart = [];

    const exist = Cart.find(pd => pd.id === product.id);
    if(exist){
        exist.quantity = exist.quantity + 1;
        const restProduct = Cart.filter(pd => pd.id !== product.id);
        updateCart = [...restProduct,exist]
    }else{
        product.quantity = 1;
        updateCart = [...Cart,product]
    }
      setCart(updateCart);
      addToDb(product.id)
    };

    console.log(Cart);


    // useEffect(() => {
    //   const storeData = getToDb();
    //   const storeCart = [];
    //   for (const id in storeData) {
    //     const addToCartItem = products.find((product) => product.id === id);
    //     if (addToCartItem) {
    //       const quantityValue = storeData[id];
    //       addToCartItem["quantity"] = quantityValue;
    //       storeCart.push(addToCartItem);
    //     }
    //   }
    //   setCart(storeCart);
    // }, []);
  
  return (
    <div className="max-w-full w-10/12 mx-auto">
      <div className="mt-10 md:mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCart
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          ></ProductCart>
        ))}
      </div>
      <h1>Hello Shop</h1>
    </div>
  );
};

export default Shop;
