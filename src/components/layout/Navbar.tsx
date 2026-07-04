"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/pvm", label: "PvM" },
  { href: "/events", label: "Events" },
  { href: "/teaching", label: "Teaching" },
  { href: "/ranks", label: "Ranks" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-red-950/70 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/hero/logo-icon.png" alt="Shadowvale" width={48} height={48} className="drop-shadow-[0_0_24px_rgba(239,68,68,.55)]" />
          <div>
            <div className="text-xl font-black uppercase tracking-[0.35em] text-zinc-100">Shadowvale</div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-red-500">Forged Through PvM</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`relative text-sm font-black uppercase tracking-widest transition ${active ? "text-red-400" : "text-zinc-200 hover:text-red-400"}`}>
                {link.label}
                {active && <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,.95)]" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="https://discord.gg/YOURINVITE" target="_blank" className="rounded-md border border-zinc-600 bg-black/40 px-6 py-3 text-sm font-black uppercase tracking-widest text-zinc-100 transition hover:border-red-500 hover:text-red-400">Discord</a>
          <Link href="/login" className="rounded-md border border-red-600 bg-red-950/30 px-6 py-3 text-sm font-black uppercase tracking-widest text-red-200 transition hover:bg-red-700 hover:text-white">Login</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="text-red-400 lg:hidden">{open ? <X size={30} /> : <Menu size={30} />}</button>
      </div>

      {open && (
        <div className="border-t border-red-950/70 bg-black lg:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block px-6 py-4 text-sm font-black uppercase tracking-widest text-zinc-300 hover:bg-red-950/30 hover:text-red-300">{link.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
