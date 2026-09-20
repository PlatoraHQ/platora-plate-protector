import { Link } from "@tanstack/react-router";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`inline-flex items-center gap-3 font-medium tracking-[0.28em] ${light ? "text-hero-foreground" : "text-foreground"}`} aria-label="Platora home">
    <span className="flex w-5 flex-col gap-1" aria-hidden="true"><i className="h-0.5 w-3 self-end rounded-full bg-brand-blue"/><i className="h-0.5 w-5 rounded-full bg-brand-violet"/><i className="h-0.5 w-3 self-end rounded-full bg-hero-foreground"/></span>
    <span>PLATORA</span>
  </Link>;
}
