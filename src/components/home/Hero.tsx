import Link from "next/link";
import {
  CalendarDays,
  ChevronDown,
  Gamepad2,
  GraduationCap,
  Sword,
  Users,
} from "lucide-react";

const stats = [
  { label: "Members", value: "420", icon: Users },
  { label: "Events", value: "87", icon: CalendarDays },
  { label: "Raids", value: "1,582", icon: Sword },
  { label: "Teachers", value: "99", icon: GraduationCap },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-black text-zinc-100">
      {/* Exact approved concept as hero base */}
      <div className="absolute inset-0 bg-[url('/hero/shadowvale-hero-reference.png')] bg-cover bg-center" />

      {/* Remove any readable labels/borders from source image edges */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.12),rgba(0,0,0,.03)_40%,rgba(7,8,10,.96)_98%)]" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent" />

      {/* Subtle live overlays */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen animate-embers bg-[radial-gradient(circle_at_12%_78%,rgba(255,50,50,.32),transparent_9%),radial-gradient(circle_at_82%_28%,rgba(255,50,50,.25),transparent_10%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 animate-fog bg-[radial-gradient(ellipse_at_22%_72%,rgba(255,255,255,.12),transparent_28%),radial-gradient(ellipse_at_76%_66%,rgba(255,255,255,.08),transparent_24%)]" />

      <div className="relative mx-auto min-h-[calc(100vh-5rem)] max-w-[1600px] px-10 pb-52 pt-24">
        <div className="max-w-4xl pt-28">
          <h1 className="text-6xl font-black uppercase tracking-[0.14em] text-zinc-100 drop-shadow-[0_0_40px_rgba(0,0,0,1)] md:text-8xl xl:text-9xl">
            Shadowvale
          </h1>

          <div className="mt-7 flex max-w-3xl items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-red-600 via-red-500 to-red-900/20 shadow-[0_0_18px_rgba(239,68,68,.9)]" />
            <div className="mx-3 h-3 w-3 rotate-45 border border-red-500 bg-black shadow-[0_0_18px_rgba(239,68,68,.9)]" />
            <div className="h-px w-32 bg-gradient-to-r from-red-500 to-transparent" />
          </div>

          <p className="mt-8 text-3xl leading-relaxed text-zinc-200 drop-shadow-[0_0_18px_rgba(0,0,0,1)] md:text-4xl">
            Forged through <span className="text-red-500">PvM</span>.
            <br />
            Built through <span className="text-red-500">community</span>.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <a
              href="https://discord.gg/YOURINVITE"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-red-500 bg-red-700/60 px-10 py-5 font-black uppercase tracking-widest text-white shadow-[0_0_40px_rgba(185,28,28,.65)] transition hover:-translate-y-1 hover:bg-red-700"
            >
              <Gamepad2 size={22} />
              Join Discord
            </a>

            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-zinc-400/70 bg-black/65 px-10 py-5 font-black uppercase tracking-widest text-zinc-100 transition hover:-translate-y-1 hover:border-red-500 hover:text-red-300"
            >
              <CalendarDays size={22} />
              View Events
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 w-full max-w-5xl -translate-x-1/2 px-6">
        <div className="grid overflow-hidden rounded-xl border border-red-900/70 bg-black/72 shadow-[0_0_65px_rgba(0,0,0,.95)] backdrop-blur-xl md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="border-b border-red-950/70 p-7 text-center md:border-b-0 md:border-r last:md:border-r-0"
              >
                <Icon className="mx-auto mb-3 h-8 w-8 text-red-500" />
                <div className="text-5xl font-black text-zinc-100">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-bold uppercase tracking-[0.35em] text-zinc-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col items-center text-red-500">
          <ChevronDown className="h-9 w-9 animate-bounce drop-shadow-[0_0_16px_rgba(239,68,68,.9)]" />
          <span className="mt-1 text-xs font-black uppercase tracking-[0.28em]">
            Scroll to Explore
          </span>
        </div>
      </div>
    </section>
  );
}
