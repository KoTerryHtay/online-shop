import { Image } from "@nextui-org/react";
import Link from "next/link";
import AddToCart from "../add-to-cart";
import { cartItem } from "@/interfaces";
import QuantityButton from "../quantity-button";
import { paths } from "@/paths";

export default function ItemBox({ data }: { data: cartItem }) {
  // console.log("Item box >>>", data);

  return (
    <div className="border-[#344955] border-solid border-3 bg-[#344955] w-fit flex flex-col rounded-xl items-start hover:cursor-pointer text-white p-1 ">
      <Link href={paths.productDetail(data.category, data.id)}>
        <div>{data.category?.toUpperCase()}</div>
        <Image
          alt="img"
          src={data.images[0]}
          width={200}
          height={100}
          isZoomed
        />
      </Link>
      <div className="flex gap-1 py-1">
        <div className="flex flex-col">
          <div>{data.name}</div>
          <div>{data.price} kyats</div>
        </div>
      </div>
      <QuantityButton id={data.id} />
      <AddToCart cartItem={data} />
    </div>
  );
}
