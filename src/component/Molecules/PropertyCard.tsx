import Link from "next/link";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatPrice, photo } from "@/lib/stays";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-xl border border-stone-200 bg-white">
      <div className="group relative block h-64 overflow-hidden">
        <img
          src={photo(property.image)}
          alt={`${property.name} in ${property.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105 motion-reduce:transform-none"
        />
        <span className="absolute top-4 left-4 rounded bg-white/95 px-3 py-2 text-[10px]">
          {property.tag}
        </span>
      </div>
      <div className="p-5">
        <p className="text-[10px] tracking-widest text-amber-800 uppercase">
          {property.type}
        </p>
        <h3 className="my-3 font-serif text-2xl">{property.name}</h3>
        <p className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
          <MapPin size={14} />
          {property.location}, Sri Lanka <Users size={14} />
          {property.guests} guests
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4">
          <p className="text-xs">
            <strong>LKR {formatPrice(property.price)}</strong>
            <span className="text-stone-500"> / night</span>
          </p>
        </div>
      </div>
    </article>
  );
}
