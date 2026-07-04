import Link from "next/link";
import { CalendarDays, Gamepad2, GraduationCap, Shield, Sword, Users } from "lucide-react";

const stats = [
  { label: "Members", value: "420", icon: Users },
  { label: "Events", value: "87", icon: CalendarDays },
  { label: "Raids", value: "1,582", icon: Sword },
  { label: "Teachers", value: "99", icon: GraduationCap },
];

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#07080a] text-zinc-100">
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-red-950/70">
        <div className="absolute inset-0 bg-[url('/hero/castle.png')] bg-cover bg-center opacity-80" />
        <div className="absolute inset-0 bg-[url('/hero/fog.png')] bg-cover bg-center opacity-35 mix-blend-screen animate-fog" />
        <div className="absolute inset-0 bg-[url('/hero/embers.png')] bg-cover bg-center opacity-45 mix-blend-screen animate-embers" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.96),rgba(0,0,0,.42),rgba(0,0,0,.88))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.10),#07080a_95%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h1 className="text-6xl font-black uppercase tracking-[0.08em] text-zinc-100 drop-shadow-[0_0_35px_rgba(185,28,28,0.7)] md:text-8xl">
              Shadowvale
            </h1>

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
                className="inline-flex items-center justify-center gap-3 rounded-md border border-zinc-600 bg-black/40 px-8 py-4 font-bold uppercase tracking-widest text-zinc-200 transition hover:-translate-y-1 hover:border-red-500 hover:text-red-300"
              >
                <CalendarDays size={20} />
                View Events
              </Link>
            </div>
          </div>

          <div className="relative hidden justify-center lg:flex">
            <div className="absolute h-[34rem] w-[34rem] rounded-full bg-red-700/25 blur-3xl" />
            <div className="relative flex h-[28rem] w-[28rem] items-center justify-center rounded-full border border-red-900/60 bg-black/45 shadow-[0_0_110px_rgba(185,28,28,0.55)] backdrop-blur animate-float">
              <div className="absolute inset-8 bg-[url('/hero/crest.png')] bg-contain bg-center bg-no-repeat" />
              <Shield className="h-48 w-48 text-red-500/70 drop-shadow-[0_0_35px_rgba(239,68,68,0.9)]" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto -mt-28 max-w-5xl px-6 pb-16">
          <div className="grid overflow-hidden rounded-xl border border-red-900/60 bg-black/60 shadow-[0_0_50px_rgba(0,0,0,0.7)] backdrop-blur-xl md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="border-b border-red-950/70 p-6 text-center md:border-b-0 md:border-r last:md:border-r-0"
                >
                  <Icon className="mx-auto mb-3 h-6 w-6 text-red-500" />
                  <div className="text-4xl font-black text-zinc-100">{stat.value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}