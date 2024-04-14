"use client";

import { clearCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";

export default function OrderItem() {
  const { cart: carts } = useAppSelector((state) => state.cart);
  const totalPrice = carts.reduce((sum, item) => sum + item.totalPrice, 0);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-10 items-center px-1 py-2">
        <div className="font-bold text-white">OrderItem List</div>
        <div className="font-semibold text-white">
          Total Amount : {totalPrice}
        </div>
      </div>
      <div>
        <Table aria-label="label of order item">
          <TableHeader>
            <TableColumn key={"name"}>Name</TableColumn>
            <TableColumn key={"price"}>Price</TableColumn>
            <TableColumn key={"quantity"}>Quantity</TableColumn>
            <TableColumn key={"totalPrice"}>Sub-Total Price</TableColumn>
          </TableHeader>
          <TableBody>
            {carts.map((cart) => (
              <TableRow key={cart.id}>
                <TableCell>{cart.name}</TableCell>
                <TableCell>{cart.price}</TableCell>
                <TableCell>{cart.quantity}</TableCell>
                <TableCell>{cart.totalPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Link onClick={() => dispatch(clearCart())} href={"/"} className="py-1">
        <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-100">
          Home
        </button>
      </Link>
    </div>
  );
}
