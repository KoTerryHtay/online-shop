import ItemBox from "@/components/boxs/item-box";
import { TemperGlassInterface } from "@/interfaces";
import ItemPage from "@/components/ItemPage";
import data from "../../../../data/e commerce.json";

export default function TemperGlassPage() {
  return (
    <div>
      <ItemPage text="Temper Glass">
        {data.Temper_Glass.map((data) => (
          <ItemBox key={data.id} data={data as TemperGlassInterface} />
        ))}
      </ItemPage>
    </div>
  );
}
