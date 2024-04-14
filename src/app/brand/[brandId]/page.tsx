import ItemPage from "@/components/ItemPage";
import data from "../../../../data/e commerce.json";
import ItemBox from "@/components/boxs/item-box";
import { ChargerInterface, PhoneInterface, PowerBank } from "@/interfaces";

interface propsInterface {
  params: {
    brandId: string;
  };
}

export default function BrandPage({ params }: propsInterface) {
  const { brandId } = params;

  const powerBank = data.PowerBank.filter((data) => data.brandId === brandId);

  const charger = data.Charger.filter((data) => data.brandId === brandId);

  const cable = data.Cable.filter((data) => data.brandId === brandId);

  const chargerHead = data.ChargerHead.filter(
    (data) => data.brandId === brandId
  );

  const phone = data.Phone.filter((data) => data.brandId === brandId);

  return (
    <div>
      {!!powerBank.length && (
        <ItemPage text="Power Bank">
          {powerBank.map((data) => (
            <ItemBox key={data.id} data={data as PowerBank} />
          ))}
        </ItemPage>
      )}

      {!!charger.length && (
        <ItemPage text="Charger">
          {charger.map((data) => (
            <ItemBox key={data.id} data={data as ChargerInterface} />
          ))}
        </ItemPage>
      )}

      {!!cable.length && (
        <ItemPage text="Cable">
          {cable.map((data) => (
            <ItemBox key={data.id} data={data as ChargerInterface} />
          ))}
        </ItemPage>
      )}

      {!!chargerHead.length && (
        <ItemPage text="Charger Head">
          {chargerHead.map((data) => (
            <ItemBox key={data.id} data={data as ChargerInterface} />
          ))}
        </ItemPage>
      )}

      {!!phone.length && (
        <ItemPage text="Phone">
          {phone.map((data) => (
            <ItemBox key={data.id} data={data as PhoneInterface} />
          ))}
        </ItemPage>
      )}
    </div>
  );
}
