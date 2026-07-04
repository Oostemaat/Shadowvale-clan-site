import Link from "next/link";
import { Shield } from "lucide-react";

const links = [
  { href: "/events", label: "Events" },
  { href: "/pvm", label: "PvM" },
  { href: "/teaching", label: "Teaching" },
  { href: "/ranks", label: "Ranks" },
  { href: "/gallery", label: "Gallery" },
];

export default function Footer() {
  return (
    <footer className="border-t border-red-950/60 bg-black px-8 py-10">
      <div className="mx-auto flex max-w-[1540px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-red-700/60 bg-red-950/30 p-2 text-red-500">
            <Shield size={28} />
          </div>
          <div>
            <div className="text-lg font-black uppercase tracking-[0.25em] text-zinc-100">
              Shadowvale
            </div>
            <div className="text-xs uppercase tracking-widest text-red-500">
              Forged Through PvM
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm font-bold uppercase tracking-widest text-zinc-400">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-red-400">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
