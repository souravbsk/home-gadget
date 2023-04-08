import React from "react";
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({ product,handleRemoveItem }) => {
  const { category, id, index, name, picture, price, quantity } = product;
  return (
    <li className="py-5">
      <div className="flex gap-3">
        <img
          className="w-3/12 h-3/12 rounded-lg max-w-full"
          src={picture}
          alt=""
        />
        <div className="flex gap-3 flex-col">
          <div>
            <h4 className="md:text-lg font-semibold text-slate-800">{name}</h4>
            <p className="text-sm text-slate-500">Quantity: {quantity}</p>
          </div>
          <div className="mt-auto pb-3">
            <button onClick={() => handleRemoveItem(id)} className="flex items-center gap-1"><TrashIcon className="w-5 h-5 text-slate-400 font-light"></TrashIcon> <span className="font-light text-sm">Remove</span></button>
          </div>
        </div>
        <div className="ml-auto text-left shrink-0">
          <h4>Price: ${price}</h4>
          <p className="md:text-xl text-sm">Total: <span className="font-semibold">${price * quantity}</span></p>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
