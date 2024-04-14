"use client";

import {
  decreaseQuantity,
  increaseQuantity,
} from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ChangeEvent, useState } from "react";

export default function QuantityButton({ id }: { id: string }) {
  const { cart: carts } = useAppSelector((cart) => cart.cart);
  const cart = carts.find((cart) => cart.id === id);

  const [count, setCount] = useState(cart?.quantity ?? 1);

  const dispatch = useAppDispatch();

  if (!cart) return null;

  function increase() {
    setCount((count) => count + 1);
    dispatch(increaseQuantity(id));
  }

  function decrease() {
    setCount((count) => (count > 1 ? count - 1 : count));
    if (cart?.quantity === 0) return;
    dispatch(decreaseQuantity(id));
  }

  function setQuantity(e: ChangeEvent<HTMLInputElement>) {
    setCount(Number(e.target.value));
  }

  return (
    <div className="flex gap-1 font-semibold py-1">
      <div
        className="bg-blue-400 px-3 rounded hover:cursor-pointer hover:bg-blue-300"
        onClick={decrease}
      >
        -
      </div>
      <input
        type="number"
        value={count}
        className="w-10 rounded text-black text-center p-0.5 "
        onChange={setQuantity}
        disabled
      />
      <div
        className="bg-blue-400 px-3 rounded hover:cursor-pointer hover:bg-blue-300"
        onClick={increase}
      >
        +
      </div>
    </div>
  );
}
