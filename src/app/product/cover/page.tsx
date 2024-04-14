import ItemBox from "@/components/boxs/item-box";
import { CoverInterface } from "@/interfaces";
import ItemPage from "@/components/ItemPage";
import data from "../../../../data/e commerce.json";

export default function CoverPage() {
  return (
    <div>
      <ItemPage text="Cover">
        {data.Cover.map((data) => (
          <ItemBox key={data.id} data={data as CoverInterface} />
        ))}
      </ItemPage>
    </div>
  );
}
