import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Brand } from "./brand";
import { Button } from "@/components/ui/button";

const nav = [["How It Works", "/how-it-works"], ["Pricing", "/pricing"], ["For Partners", "/partners"], ["Resources", "/resources"], ["Support", "/support"]] as const;

export function SiteShell({ children, darkHeader = false }: { children: ReactNode; darkHeader?: boolean }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className={`relative z-40 border-b ${darkHeader ? "border-hero-border bg-hero text-hero-foreground" : "border-border bg-background"}`}>
      <div className="mx-auto grid h-16 max-w-site grid-cols-[minmax(0,1fr)_auto] items-center px-5 lg:grid-cols-[auto_1fr_auto] lg:px-8">
        <Brand light={darkHeader}/>
        <nav className="hidden items-center justify-center gap-9 lg:flex">
          {nav.map(([label,to]) => <Link key={to} to={to} className="text-xs font-medium opacity-75 transition-opacity hover:opacity-100" activeProps={{className:"opacity-100"}}>{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex"><Button asChild variant={darkHeader ? "heroGhost" : "ghost"} size="sm"><Link to="/login">Log in</Link></Button><Button asChild variant={darkHeader ? "hero" : "default"} size="sm"><Link to="/signup">Get Started</Link></Button></div>
        <Button variant={darkHeader ? "heroGhost" : "ghost"} size="icon" className="lg:hidden" onClick={() => setOpen(v=>!v)} aria-label="Open navigation"><Menu/></Button>
      </div>
      {open && <nav className={`border-t px-5 py-4 lg:hidden ${darkHeader ? "border-hero-border bg-hero" : "border-border bg-background"}`}>{nav.map(([label,to]) => <Link key={to} to={to} onClick={()=>setOpen(false)} className="block py-2 text-sm">{label}</Link>)}<div className="mt-3 flex gap-2"><Button asChild variant="outline" size="sm"><Link to="/login">Log in</Link></Button><Button asChild size="sm"><Link to="/signup">Get Started</Link></Button></div></nav>}
    </header>
    {children}
    <footer className="border-t border-hero-border bg-hero text-hero-muted"><div className="mx-auto grid max-w-site gap-6 px-5 py-8 text-xs md:grid-cols-[auto_1fr_auto] md:items-center lg:px-8"><Brand light/><p className="max-w-xl md:mx-auto">Platora is not a government agency and is not affiliated with any DMV, toll authority, court, city, state, or federal agency.</p><div className="flex gap-5"><Link to="/support">Support</Link><Link to="/resources">Resources</Link></div></div></footer>
  </div>;
}
