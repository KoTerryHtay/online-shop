"use client";

import { useAppSelector } from "@/lib/hooks";
import { Badge } from "@nextui-org/react";

export default function CartBadge({ children }: { children: React.ReactNode }) {
  const { cart } = useAppSelector((state) => state.cart);
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!cartQuantity) return <div>{children}</div>;

  return (
    <Badge content={cartQuantity} color="danger" shape="circle" size="sm">
      {children}
    </Badge>
  );
}
