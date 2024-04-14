"use client";

import { paths } from "@/paths";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

interface dataProps {
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

export default function TitlePopover({
  text,
  data,
}: {
  text: "Brand" | "Categories";
  data: dataProps[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Popover
        placement="bottom-start"
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <PopoverTrigger>
          <div className="hover:underline hover:cursor-pointer">{text}</div>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            {data.map((data, index) => (
              <Link
                href={
                  text === "Categories"
                    ? paths.categoryPage(categoriesType[index])
                    : paths.brandPage(data.id)
                }
                className="border mx-1 my-2 rounded hover:cursor-pointer p-0.5"
                key={data.id}
                onClick={() => setIsOpen(false)}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
