"use client";
import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import type { Property } from "@/data/properties";
import { localToday, validateDates } from "@/lib/stays";
import Button from "../Atoms/Button";
import Field, { inputStyles } from "../Atoms/Field";
import DateFields from "../Molecules/DateFields";

export default function BookingForm({
  property,
  initialDates,
  onClose,
}: {
  property: Property;
  initialDates: { checkin: string; checkout: string };
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [dates, setDates] = useState(initialDates);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const node = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    node?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      node?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      aria-labelledby="booking-title"
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl bg-white p-6 text-emerald-950 shadow-2xl backdrop:bg-emerald-950/80 backdrop:backdrop-blur-sm sm:p-9"
    >
      <button
        type="button"
        onClick={onClose}
        autoFocus
        aria-label="Close booking form"
        className="absolute top-4 right-4 rounded-full bg-stone-100 p-2"
      >
        <X size={20} />
      </button>
      {confirmed ? (
        <div role="status" className="py-10 text-center">
          <Check className="mx-auto mb-6 text-emerald-700" size={40} />
          <h2 id="booking-title" className="font-serif text-3xl">
            Booking Request Submitted!
          </h2>
          <p className="my-5 text-sm leading-7 text-stone-600">
            Thanks for choosing {property.name}. We will contact you soon.
          </p>
          <Button onClick={onClose}>Continue exploring</Button>
        </div>
      ) : (
        <>
          <p className="mb-4 text-[10px] font-bold tracking-widest text-amber-800">
            YOUR ISLAND ESCAPE
          </p>
          <h2 id="booking-title" className="font-serif text-3xl">
            Request a stay
          </h2>
          <p className="mt-3 text-sm text-stone-600">
            {property.name} · {property.location}
          </p>
          <form
            className="mt-7 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const submittedDates = {
                checkin: String(data.get("checkin") || ""),
                checkout: String(data.get("checkout") || ""),
              };
              const issue = validateDates(
                submittedDates.checkin,
                submittedDates.checkout,
                localToday(),
                true,
              );
              if (issue) {
                setError(issue);
                return;
              }
              if (!String(data.get("name")).trim()) {
                setError("Please enter your name.");
                return;
              }
              setDates(submittedDates);
              setError("");
              setConfirmed(true);
            }}
          >
            <Field label="Guest name">
              <input
                className={inputStyles}
                name="name"
                required
                maxLength={100}
                autoComplete="name"
                placeholder="Your full name"
              />
            </Field>
            <Field label="Email address">
              <input
                className={inputStyles}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Contact number">
              <input
                className={inputStyles}
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                pattern={"[+0-9() \\-]{7,20}"}
                placeholder="+94 77 123 4567"
              />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <DateFields
                {...dates}
                required
                onChange={(key, value) => setDates({ ...dates, [key]: value })}
              />
            </div>
            <Field label={`Number of guests (maximum ${property.guests})`}>
              <input
                className={inputStyles}
                name="guests"
                type="number"
                min={1}
                max={property.guests}
                step={1}
                defaultValue={1}
                required
              />
            </Field>
            {error && (
              <p
                role="alert"
                className="rounded bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}
            <Button type="submit">Submit booking request</Button>
            <p className="text-center text-xs leading-5 text-stone-500">
              Demonstration only. Your details are not stored or sent.
            </p>
          </form>
        </>
      )}
    </dialog>
  );
}
