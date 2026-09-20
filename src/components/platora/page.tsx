import type { ReactNode } from "react";
import { SiteShell } from "./site-shell";
export function Page({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro: string; children: ReactNode }) {
 return <SiteShell><main><section className="border-b border-border bg-surface"><div className="mx-auto max-w-content px-5 py-14 lg:px-8"><p className="eyebrow">{eyebrow}</p><h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{intro}</p></div></section>{children}</main></SiteShell>;
}
export function Section({ children, muted=false }: { children: ReactNode; muted?: boolean }) { return <section className={muted ? "bg-surface" : "bg-background"}><div className="mx-auto max-w-content px-5 py-12 lg:px-8">{children}</div></section>; }
