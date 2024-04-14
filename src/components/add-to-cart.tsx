"use client";

import { cartItem } from "@/interfaces";
import { addCart, removeCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function AddToCart({ cartItem }: { cartItem: cartItem }) {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const isSelected = cart.find((cart) => cart.id === cartItem.id);

  function addCarts() {
    if (isSelected) {
      dispatch(removeCart(cartItem.id!));
    } else {
      dispatch(addCart(cartItem));
    }
    console.log("add-to-cart >>>", cartItem);
  }

  return (
    <button
      className={`w-full rounded-xl text-center p-0.5 hover:cursor-pointer ${
        isSelected
          ? "bg-green-600 hover:bg-green-500"
          : "bg-blue-600 hover:bg-blue-500"
      } py-2 `}
      onClick={addCarts}
    >
      {isSelected ? "Added" : "Add to Cart"}
    </button>
  );
}
