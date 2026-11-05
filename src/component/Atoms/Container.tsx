import type { HTMLAttributes } from "react";

export default function Container({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mx-auto w-[90%] max-w-7xl ${className}`} {...props} />
  );
}
