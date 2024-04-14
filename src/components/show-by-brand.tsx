import { getBrand } from "@/utils";
import ListBox from "./boxs/list-box";

export default function ShowByBrand() {
  const brands = getBrand();

  return (
    <div>
      <ListBox type="Brand" lists={brands} />
    </div>
  );
}
