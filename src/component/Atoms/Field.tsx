import type { ReactNode } from "react";

export const inputStyles =
  "w-full min-w-0 rounded-md border border-stone-300 bg-white px-3 py-3 text-sm text-emerald-950";

export default function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold text-stone-600">
      {label}
      {children}
    </label>
  );
}
