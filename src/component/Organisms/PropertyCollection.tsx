import { properties } from "@/data/properties";
import SectionHeading from "../Atoms/SectionHeading";
import PropertyCard from "../Molecules/PropertyCard";

export default function PropertyCollection({
  destination,
  guests,
  explore,
  onDestination,
  onReset,
}: {
  destination: string;
  guests: number;
  explore: boolean;
  onDestination: (city: string) => void;
  onReset: () => void;
}) {
  const matches = properties.filter(
    (p) => (!destination || p.location === destination) && p.guests >= guests,
  );
  return (
    <section id="stays" className="scroll-mt-28 py-14 md:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <SectionHeading
            eyebrow="HANDPICKED PLACES, ISLAND-WIDE"
            title={
              explore ? "Find your next escape" : "Somewhere special awaits"
            }
          />
          <p className="text-sm leading-7 text-stone-600">
            From the southern shores to the misty hills, make yourself at home.
          </p>
        </div>
        <p
          role="status"
          className="hidden whitespace-nowrap text-xs text-stone-500 sm:block"
        ></p>
      </div>
      <div className="my-7 flex flex-wrap gap-2">
        {["", ...properties.map((p) => p.location)].map((city) => (
          <button
            key={city}
            type="button"
            aria-pressed={destination === city}
            onClick={() => onDestination(city)}
            className={`rounded-full border px-4 py-2.5 text-xs transition ${destination === city ? "border-emerald-950 bg-emerald-950 text-white" : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"}`}
          >
            {city || "All destinations"}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </section>
  );
}
