import ItemBox from "@/components/boxs/item-box";
import { ChargerInterface } from "@/interfaces";
import ItemPage from "@/components/ItemPage";
import data from "../../../../data/e commerce.json";

export default function ChargerPage() {
  return (
    <div>
      <ItemPage text="Charger">
        {data.Charger.map((data) => (
          <ItemBox key={data.id} data={data as ChargerInterface} />
        ))}
      </ItemPage>
    </div>
  );
}
