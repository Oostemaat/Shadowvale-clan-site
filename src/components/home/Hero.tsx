import Link from "next/link";
import {
  CalendarDays,
  Gamepad2,
  GraduationCap,
  Shield,
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
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-red-950/70 bg-[#07080a]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[url('/hero/castle.png')] bg-cover bg-center opacity-95" />
      <div className="absolute inset-0 bg-[url('/hero/fog.png')] bg-cover bg-center opacity-30 mix-blend-screen animate-fog" />
      <div className="absolute inset-0 bg-[url('/hero/embers.png')] bg-cover bg-center opacity-45 mix-blend-screen animate-embers" />

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.92),rgba(0,0,0,.25),rgba(0,0,0,.62))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.1),rgba(7,8,10,.95)_95%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h1 className="text-6xl font-black uppercase tracking-[0.1em] text-zinc-100 drop-shadow-[0_0_35px_rgba(185,28,28,0.8)] md:text-8xl">
            Shadowvale
          </h1>

          <div className="mt-6 h-px max-w-xl bg-gradient-to-r from-red-600 via-red-500 to-transparent shadow-[0_0_18px_rgba(239,68,68,0.8)]" />

          <p className="mt-7 text-2xl leading-relaxed text-zinc-200 md:text-3xl">
            Forged through <span className="text-red-500">PvM</span>.
            <br />
            Built through <span className="text-red-500">community</span>.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://discord.gg/YOURINVITE"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-red-500 bg-red-700/35 px-8 py-4 font-bold uppercase tracking-widest text-white shadow-[0_0_35px_rgba(185,28,28,0.45)] transition hover:-translate-y-1 hover:bg-red-700"
            >
              <Gamepad2 size={20} />
              Join Discord
            </a>

            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-zinc-600 bg-black/45 px-8 py-4 font-bold uppercase tracking-widest text-zinc-200 transition hover:-translate-y-1 hover:border-red-500 hover:text-red-300"
            >
              <CalendarDays size={20} />
              View Events
            </Link>
          </div>
        </div>

        {/* Crest area */}
        <div className="relative hidden justify-center lg:flex">
          <div className="absolute h-[34rem] w-[34rem] rounded-full border border-red-600/40 bg-red-700/10 shadow-[0_0_90px_rgba(185,28,28,0.7)] animate-pulse-ring" />
          <div className="absolute h-[28rem] w-[28rem] rounded-full bg-black/60 shadow-[0_0_110px_rgba(185,28,28,0.65)]" />

          <div className="relative flex h-[28rem] w-[28rem] items-center justify-center rounded-full border border-red-900/60 bg-black/35 backdrop-blur animate-float">
            <Shield className="h-64 w-64 text-red-500 drop-shadow-[0_0_45px_rgba(239,68,68,1)]" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto -mt-28 max-w-5xl px-6 pb-16">
        <div className="grid overflow-hidden rounded-xl border border-red-900/60 bg-black/65 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="border-b border-red-950/70 p-6 text-center md:border-b-0 md:border-r last:md:border-r-0"
              >
                <Icon className="mx-auto mb-3 h-6 w-6 text-red-500" />
                <div className="text-4xl font-black text-zinc-100">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}