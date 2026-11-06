"use client";
import Link from "next/link";
import { Car, MapPin, Waves, Wifi, Wind } from "lucide-react";
import type { Property } from "@/data/properties";
import { photo } from "@/lib/stays";
import Container from "../Atoms/Container";
import SectionHeading from "../Atoms/SectionHeading";
const amenities = [
  { Icon: Wifi, label: "Wi-Fi" },
  { Icon: Waves, label: "Swimming pool" },
  { Icon: Wind, label: "Air conditioning" },
  { Icon: Car, label: "Free parking" },
];
export default function PropertyDetails({ property }: { property: Property }) {
  return (
    <main>
      <Container className="py-10 md:py-14">
        <Link href="/explore" className="mb-8 inline-block text-sm">
          ← Explore all stays
        </Link>
        <p className="mb-3 text-xs tracking-widest text-amber-800 uppercase">
          {property.type} · {property.location}
        </p>
        <h1 className="mb-5 font-serif text-4xl md:text-6xl">
          {property.name}
        </h1>
        <p className="flex items-center gap-2 text-sm text-stone-600">
          <MapPin size={16} />
          {property.location}, Sri Lanka · Up to {property.guests} guests
        </p>
        <div className="my-8 grid grid-cols-2 grid-rows-[230px_120px] gap-3 overflow-hidden rounded-xl md:grid-cols-[2fr_1fr] md:grid-rows-[200px_200px]">
          {[
            property.image,
            "photo-1616486338812-3dadae4b4ace",
            "photo-1615874959474-d609969a20ed",
          ].map((id, i) => (
            <img
              key={id}
              src={photo(id)}
              alt={`${property.name}: ${["exterior", "living space", "bedroom"][i]}`}
              className={`h-full w-full object-cover ${i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}`}
            />
          ))}
        </div>
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
          <section>
            <SectionHeading
              eyebrow="MAKE YOURSELF AT HOME"
              title="A little escape. A lasting memory."
            />
            <p className="text-sm leading-8 text-stone-600">
              Settle into a thoughtfully furnished {property.type.toLowerCase()}{" "}
              in {property.location}. Start with a slow breakfast, spend the day
              exploring the neighbourhood, and return to comfortable rooms and
              space to unwind. A welcoming base for discovering your own side of
              Sri Lanka.
            </p>
            <h3 className="mt-8 font-serif text-2xl">What this place offers</h3>
            <div className="my-6 grid grid-cols-2 gap-6">
              {amenities.map(({ Icon, label }) => (
                <span key={label} className="flex items-center gap-3 text-sm">
                  <Icon size={20} />
                  {label}
                </span>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
