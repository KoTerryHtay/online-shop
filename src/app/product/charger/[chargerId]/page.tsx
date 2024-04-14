import { Image } from "@nextui-org/react";
import data from "../../../../../data/e commerce.json";
import AddToCart from "@/components/add-to-cart";
import BuyNow from "@/components/buy-now";
import QuantityButton from "@/components/quantity-button";
import { notFound } from "next/navigation";
interface paramsProps {
  params: {
    chargerId: string;
  };
}

export default function ChargerDetail({ params }: paramsProps) {
  const item = data.Charger.find((data) => data.id === params.chargerId);

  if (!item) return notFound();

  const brandName = data.Brand.find((data) => data.id === item?.brandId)?.name;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-2">
          <Image alt="image" src={item?.images[0]} height={600} width={400} />
        </div>
        <div className="text-white md:col-span-3">
          <div className="font-bold">Details</div>
          <div className="flex flex-col gap-2">
            <div>Brand : {brandName}</div>
            <div>Name : {item.name}</div>
            <div>Description : {item.description}</div>
            <div>Price : {item.price} kyats</div>
            <div>Type : {item.type}</div>
            <div>Output : {item.output}</div>
            <QuantityButton id={item.id} />
            <div className="flex flex-col w-48 gap-1">
              <AddToCart cartItem={item} />
              <BuyNow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}