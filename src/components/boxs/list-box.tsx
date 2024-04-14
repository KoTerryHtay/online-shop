import { paths } from "@/paths";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
}

const categoriesType = [
  "powerbank",
  "charger",
  "cable",
  "chargerhead",
  "cover",
  "temperglass",
  "phone",
];

export default function ListBox({
  lists,
  type,
}: {
  lists: Props[];
  type: "Brand" | "Categories";
}) {
  return (
    <div>
      <div className="text-white font-semibold p-2">Shop By {type}</div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 px-4 w-full">
        {lists.map((list, index) => (
          <Link
            key={list.id}
            href={
              type === "Categories"
                ? paths.categoryPage(categoriesType[index])
                : paths.brandPage(list.id)
            }
            className="w-full text-center p-5 bg-[#77B0AA] text-[#003C43] hover:text-white hover:bg-[#6e9d98] rounded-lg"
          >
            <div>{list.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
