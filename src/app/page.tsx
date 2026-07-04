import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const events = [
  { time: "Tomorrow at 7:00PM", title: "Zulrah Mass", host: "Shadowvale" },
  { time: "Saturday at 8:00PM", title: "ToB Learner Raid", host: "Shadowvale" },
  { time: "Sunday at 6:00PM", title: "CoX Teaching", host: "Shadowvale" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-red-950/60 bg-[#08090b] px-8 py-14">
        <div className="mx-auto max-w-[1540px]">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-semibold uppercase tracking-widest text-zinc-300">
                Upcoming Events
              </h2>
              <div className="hidden h-px w-40 bg-gradient-to-r from-red-700 to-transparent md:block" />
            </div>

            <Link
              href="/events"
              className="text-sm font-black uppercase tracking-widest text-zinc-300 hover:text-red-400"
            >
              View all events ›
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr_.8fr]">
            {events.map((event) => (
              <div
                key={event.title}
                className="group overflow-hidden rounded-lg border border-zinc-800 bg-black/55 transition hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_0_35px_rgba(185,28,28,0.18)]"
              >
                <div className="grid grid-cols-[115px_1fr]">
                  <div className="bg-[radial-gradient(circle_at_50%_45%,rgba(185,28,28,.42),transparent_55%),#111]"></div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-500">
                      <CalendarDays size={14} />
                      {event.time}
                    </div>

                    <h3 className="mt-3 text-xl font-black uppercase text-zinc-100">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-400">
                      Hosted by {event.host}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/events"
              className="flex min-h-28 items-center justify-center rounded-lg border border-red-800 bg-red-950/20 p-5 text-center font-black uppercase tracking-widest text-red-300 transition hover:bg-red-900/30"
            >
              See full event calendar
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
