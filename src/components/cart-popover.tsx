"use client";

import { paths } from "@/paths";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import BuyNow from "./buy-now";
import { useAppSelector } from "@/lib/hooks";
import CartProduct from "./cart-product";

export default function CartPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart: carts } = useAppSelector((state) => state.cart);
  const totalPrice = carts.reduce((sum, cart) => sum + cart.totalPrice, 0);

  function onClose() {
    setIsOpen(false);
  }

  return (
    <div>
      <Popover
        placement="bottom-start"
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <PopoverTrigger>
          <div className="hover:underline hover:cursor-pointer">🛒 Cart</div>
        </PopoverTrigger>
        <PopoverContent>
          {carts.length ? (
            <div>
              <CartProduct cartProducts={carts} onClose={onClose} />
              <div>Total Price: {totalPrice}</div>
              <div className="flex gap-2 items-center">
                <Link onClick={onClose} href={paths.cart()}>
                  <button className="bg-blue-600 w-full rounded-xl text-center hover:cursor-pointer hover:bg-blue-500 p-2 text-nowrap text-white">
                    View Cart
                  </button>
                </Link>
                <div onClick={onClose}>
                  <BuyNow />
                </div>
              </div>
            </div>
          ) : (
            <div className="font-semibold flex gap-5 flex-col p-2">
              <div>No Cart</div>
              <Button color="warning" onClick={onClose}>
                Close
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
