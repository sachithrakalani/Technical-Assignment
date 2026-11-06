"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { properties } from "@/data/properties";
import {
  emptySearch,
  localToday,
  validateDates,
  type StaySearch,
} from "@/lib/stays";
import Field, { inputStyles } from "../Atoms/Field";
import DateFields from "../Molecules/DateFields";
import Button from "../Atoms/Button";

export default function SearchForm({
  onSearch,
}: {
  onSearch: (search: StaySearch) => void;
}) {
  const [values, setValues] = useState(emptySearch);
  const [error, setError] = useState("");
  return (
    <form
      className="relative grid items-end gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-xl shadow-emerald-950/5 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_.7fr_auto] lg:p-6"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const submitted = {
          destination: String(data.get("destination") || ""),
          checkin: String(data.get("checkin") || ""),
          checkout: String(data.get("checkout") || ""),
          guests: Number(data.get("guests") || 1),
        };
        const issue = validateDates(
          submitted.checkin,
          submitted.checkout,
          localToday(),
        );
        setError(issue);
        if (!issue) onSearch(submitted);
      }}
    >
      <Field label="Destination">
        <select
          name="destination"
          className={inputStyles}
          value={values.destination}
          onChange={(e) =>
            setValues({ ...values, destination: e.target.value })
          }
        >
          <option value="">Anywhere in Sri Lanka</option>
          {properties.map((p) => (
            <option key={p.location}>{p.location}</option>
          ))}
        </select>
      </Field>
      <DateFields
        checkin={values.checkin}
        checkout={values.checkout}
        onChange={(key, value) => setValues({ ...values, [key]: value })}
      />
      <Field label="Guests">
        <select
          name="guests"
          className={inputStyles}
          value={values.guests}
          onChange={(e) =>
            setValues({ ...values, guests: Number(e.target.value) })
          }
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </Field>
      <Button type="submit" className="sm:col-span-2 lg:col-span-1">
        Find my stay <ArrowUpRight size={18} />
      </Button>
      {error && (
        <p
          role="alert"
          className="text-sm text-red-700 sm:col-span-2 lg:col-span-5"
        >
          {error}
        </p>
      )}
    </form>
  );
}
