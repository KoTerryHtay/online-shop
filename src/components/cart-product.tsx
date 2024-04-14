import { cartItem } from "@/interfaces";
import { paths } from "@/paths";
import {
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";
import CartProductRemove from "./cart-product-remove";

export default function CartProduct({
  cartProducts,
  onClose,
}: {
  cartProducts: cartItem[];
  onClose: () => void;
}) {
  return (
    <div className="py-2">
      <Table removeWrapper aria-label="cart product">
        <TableHeader>
          <TableColumn key={"image"}>{""}</TableColumn>
          <TableColumn key={"name"}>Name</TableColumn>
          <TableColumn key={"quantity"}>Quantity</TableColumn>
          <TableColumn key={"totalPrice"}>Total Price</TableColumn>
          <TableColumn key={"remove"}>{""}</TableColumn>
        </TableHeader>
        <TableBody>
          {cartProducts.map((cart) => (
            <TableRow key={cart.id}>
              <TableCell>
                <Link
                  onClick={onClose}
                  href={paths.productDetail(cart.category, cart.id)}
                >
                  <Image
                    isZoomed
                    alt={cart.name}
                    src={cart.images[0]}
                    width={45}
                    height={45}
                  />
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  onClick={onClose}
                  href={paths.productDetail(cart.category, cart.id)}
                  className="hover:cursor-pointer hover:underline hover:text-red-500"
                >
                  {cart.name}
                </Link>
              </TableCell>
              <TableCell>x{cart.quantity}</TableCell>
              <TableCell>{cart.totalPrice}</TableCell>
              <TableCell>
                <CartProductRemove id={cart.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
