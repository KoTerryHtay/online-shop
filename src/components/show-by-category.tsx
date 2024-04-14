import { getCategories } from "@/utils";
import ListBox from "./boxs/list-box";

export default function ShowByCategory() {
  const categories = getCategories();

  return (
    <div>
      <ListBox type="Categories" lists={categories} />
    </div>
  );
}
