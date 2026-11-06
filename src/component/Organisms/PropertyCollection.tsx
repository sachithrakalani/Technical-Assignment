import PropertyCard from "../Molecules/PropertyCard";
import { properties } from "@/data/properties";

export default function PropertyCollection() {
  return (
    <section className="bg-stone-50 px-[8%] py-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
