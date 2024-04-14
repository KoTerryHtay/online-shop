import ItemBox from "@/components/boxs/item-box";
import { CableInterface } from "@/interfaces";
import ItemPage from "@/components/ItemPage";
import data from "../../../../data/e commerce.json";

export default function CablePage() {
  return (
    <div>
      <ItemPage text="Cable">
        {data.Cable.map((data) => (
          <ItemBox key={data.id} data={data as CableInterface} />
        ))}
      </ItemPage>
    </div>
  );
}
