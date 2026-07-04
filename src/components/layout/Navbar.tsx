"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Shield, X } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-red-900/40 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="rounded-xl border border-red-700/60 bg-red-950/30 p-2 text-red-500 shadow-[0_0_25px_rgba(185,28,28,0.25)] transition group-hover:border-red-500">
            <Shield size={28} />
          </div>

          <div>
            <div className="text-xl font-black tracking-[0.25em] text-zinc-100">
              SHADOWVALE
            </div>
            <div className="text-xs tracking-widest text-red-500/80">
              FORGED THROUGH PVM
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold uppercase tracking-widest transition ${
                  active
                    ? "text-red-400"
                    : "text-zinc-300 hover:text-red-400"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://discord.gg/YOURINVITE"
            target="_blank"
            className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-zinc-300 transition hover:border-red-500 hover:text-red-400"
          >
            Discord
          </a>

          <Link
            href="/login"
            className="rounded-md border border-red-600 bg-red-950/30 px-5 py-2 text-sm font-bold uppercase tracking-widest text-red-300 shadow-[0_0_20px_rgba(185,28,28,0.15)] transition hover:bg-red-700 hover:text-white"
          >
            Login
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-red-400 lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-red-900/40 bg-[#08090b] lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 text-sm font-semibold uppercase tracking-widest ${
                pathname === link.href
                  ? "bg-red-950/40 text-red-400"
                  : "text-zinc-300 hover:bg-zinc-900"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="space-y-3 border-t border-red-900/40 p-6">
            <a
              href="https://discord.gg/YOURINVITE"
              target="_blank"
              className="block rounded-md border border-zinc-700 py-3 text-center text-zinc-300"
            >
              Discord
            </a>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block rounded-md border border-red-600 bg-red-950/40 py-3 text-center font-bold text-red-300"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}