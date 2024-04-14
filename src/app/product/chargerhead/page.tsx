import ItemBox from "@/components/boxs/item-box";
import { ChargerHeadInterface } from "@/interfaces";
import ItemPage from "@/components/ItemPage";
import data from "../../../../data/e commerce.json";

export default function ChargerHeadPage() {
  return (
    <div>
      <ItemPage text="Charger Head">
        {data.ChargerHead.map((data) => (
          <ItemBox key={data.id} data={data as ChargerHeadInterface} />
        ))}
      </ItemPage>
    </div>
  );
}
