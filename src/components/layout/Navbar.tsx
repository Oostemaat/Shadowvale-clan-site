"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "PvM", href: "/pvm" },
  { name: "Teaching", href: "/teaching" },
  { name: "Ranks", href: "/ranks" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/10 bg-[#0f1115]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-widest text-yellow-400"
        >
          SHADOWVALE
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="rounded-lg border border-yellow-500 px-4 py-2 text-sm transition hover:bg-yellow-500 hover:text-black">
            Login
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-yellow-400 md:hidden"
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="border-t border-yellow-500/10 bg-[#11141a] md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-300 hover:bg-[#1d2128]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}