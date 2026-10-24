import type { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "solid" | "outline";
}

export default function Button({ variant = "solid", className = "", ...rest }: Props) {
  const styles =
    variant === "solid"
      ? "bg-midnight-900 text-lavender-50 hover:bg-midnight-700"
      : "border border-midnight-900/25 text-midnight-900 hover:border-midnight-900 hover:bg-lavender-200";
  return (
    <a
      className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles} ${className}`}
      {...rest}
    />
  );
}
