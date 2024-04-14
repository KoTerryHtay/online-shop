import ItemBox from "@/components/boxs/item-box";
import { PhoneInterface } from "@/interfaces";
import ItemPage from "@/components/ItemPage";
import data from "../../../../data/e commerce.json";

export default function PhonePage() {
  return (
    <div>
      <ItemPage text="Phone">
        {data.Phone.map((data) => (
          <ItemBox key={data.id} data={data as PhoneInterface} />
        ))}
      </ItemPage>
    </div>
  );
}
