"use client";

import { useAppSelector } from "@/lib/hooks";
import ItemBox from "./boxs/item-box";
import ItemPage from "@/components/ItemPage";
import BuyNow from "./buy-now";

export default function CartCollection() {
  const { cart } = useAppSelector((state) => state.cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const totalCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!cart.length) return <div>No cart</div>;
  // console.log("cart >>>", cart);

  return (
    <div>
      <div className="flex gap-5 items-center font-semibold text-white">
        <div>Cart quantity : {totalCart}</div>
        <div>Total Price : {totalPrice}</div>
        <div>
          <BuyNow />
        </div>
      </div>
      <ItemPage>
        {cart.map((cart) => (
          <ItemBox key={cart.id + crypto.randomUUID()} data={cart} />
        ))}
      </ItemPage>
    </div>
  );
}
