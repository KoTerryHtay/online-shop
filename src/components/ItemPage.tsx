type categoryType =
  | "Cable"
  | "Charger"
  | "Charger Head"
  | "Cover"
  | "Phone"
  | "Power Bank"
  | "Temper Glass";

export default function ItemPage({
  text,
  children,
}: {
  text?: categoryType;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-white font-semibold">{text ?? ""}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-4">
        {children}
      </div>
    </div>
  );
}
