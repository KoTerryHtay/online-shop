import ItemBox from "@/components/boxs/item-box";
import { PowerBank } from "@/interfaces";
import ItemPage from "@/components/ItemPage";
import data from "../../../../data/e commerce.json";

export default function PowerBankPage() {
  return (
    <div>
      <ItemPage text="Power Bank">
        {data.PowerBank.map((data) => (
          <ItemBox key={data.id} data={data as PowerBank} />
        ))}
      </ItemPage>
    </div>
  );
}
