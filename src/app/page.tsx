import ShowByBrand from "@/components/show-by-brand";
import ShowByCategory from "@/components/show-by-category";

export default function Home() {
  return (
    <div className="gap-5 flex flex-col">
      <ShowByBrand />
      <ShowByCategory />
    </div>
  );
}
