import Link from "next/link";

export default function BuyNow() {
  return (
    <Link href={"/order"}>
      <button className="bg-orange-600 w-full rounded-xl text-center hover:cursor-pointer hover:bg-orange-500 p-2 text-nowrap text-white">
        Buy Now
      </button>
    </Link>
  );
}
