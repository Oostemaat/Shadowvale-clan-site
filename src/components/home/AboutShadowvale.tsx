import Link from "next/link";
import { GraduationCap, Shield, Sword, Users } from "lucide-react";

const highlights = [
  {
    icon: Sword,
    label: "PvM Focused",
    text: "Raids, bosses, masses, learners and progression.",
  },
  {
    icon: GraduationCap,
    label: "Learner Friendly",
    text: "Teaching runs for players who want to improve.",
  },
  {
    icon: Users,
    label: "Community Built",
    text: "A clan built around events, support and good vibes.",
  },
];

export default function AboutShadowvale() {
  return (
    <section className="relative overflow-hidden border-b border-red-950/60 bg-[#07080a] px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(185,28,28,0.18),transparent_30%),linear-gradient(to_bottom,#08090b,#101014)]" />
      <div className="absolute right-[-10%] top-10 h-96 w-96 rounded-full bg-red-900/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-red-900/50 bg-black/40 p-8 shadow-[0_0_50px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="mb-6 inline-flex rounded-full border border-red-900/60 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            About Shadowvale
          </div>

          <h2 className="text-4xl font-black uppercase tracking-widest text-zinc-100 md:text-5xl">
            Forged Through PvM
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Shadowvale is an Old School RuneScape community built around PvM,
            teaching, events, progression and a clan atmosphere where people can
            learn, improve and enjoy the game together.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Whether you are pushing raids, learning bosses, joining masses, or
            working toward your next big account goal, Shadowvale is built to
            help members stay active and connected.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex rounded-md border border-red-700 bg-red-950/30 px-6 py-3 font-bold uppercase tracking-widest text-red-300 transition hover:-translate-y-1 hover:bg-red-800 hover:text-white"
          >
            Learn More
          </Link>
        </div>

        <div className="grid gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-2xl border border-zinc-800 bg-[#101014]/85 p-6 transition hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_0_35px_rgba(185,28,28,0.18)]"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-red-900/60 bg-red-950/30 text-red-400 group-hover:border-red-500">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-widest text-zinc-100">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-zinc-400">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="rounded-2xl border border-red-900/50 bg-red-950/20 p-6">
            <div className="flex items-center gap-4">
              <Shield className="h-10 w-10 text-red-500" />
              <p className="font-bold uppercase tracking-widest text-zinc-200">
                A home for PvM, teaching and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}