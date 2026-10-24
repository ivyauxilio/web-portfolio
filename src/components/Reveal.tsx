import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
