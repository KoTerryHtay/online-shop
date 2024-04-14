import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import TitleBar from "./title-bar";
import CartBadge from "./cart-badge";
import CartPopover from "./cart-popover";

export default function Header() {
  return (
    <div className="shadow mb-2 font-bold text-white">
      <Navbar className="bg-[#003C43] shadow-sm">
        <NavbarBrand>
          <Link href={"/"}>Phone Shop</Link>
        </NavbarBrand>
        <NavbarContent justify="center">
          {/* <input placeholder="Search..." className="bg-gray-500 rounded p-2" /> */}
          <TitleBar />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="m-1 flex gap-3">
            <CartBadge>
              <CartPopover />
            </CartBadge>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
