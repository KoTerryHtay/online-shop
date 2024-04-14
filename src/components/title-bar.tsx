import { getBrand, getCategories } from "@/utils";
import TitlePopover from "./popover/title-popover";

export default function TitleBar() {
  return (
    <div className=" py-2 flex gap-5">
      <TitlePopover text="Brand" data={getBrand()} />
      <TitlePopover text="Categories" data={getCategories()} />
    </div>
  );
}
