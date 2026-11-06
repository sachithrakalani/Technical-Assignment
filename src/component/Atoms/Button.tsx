import type { ButtonHTMLAttributes } from "react";

export const buttonStyles =
  "inline-flex items-center justify-center gap-3 rounded-md bg-emerald-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50";

export default function Button({
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={`${buttonStyles} ${className}`} {...props} />
  );
}
