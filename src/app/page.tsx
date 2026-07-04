import Hero from "@/components/home/Hero";
import Link from "next/link";

const events = [
  {
    time: "Tomorrow at 7:00PM",
    title: "Zulrah Mass",
    host: "Shadowvale",
  },
  {
    time: "Saturday at 8:00PM",
    title: "ToB Learner Raid",
    host: "Parkway Dry",
  },
  {
    time: "Sunday at 6:00PM",
    title: "CoX Teaching",
    host: "Shadowvale",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-red-950/60 bg-[#08090b] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-200">
              Upcoming Events
            </h2>

            <Link
              href="/events"
              className="text-sm font-bold uppercase tracking-widest text-red-400 hover:text-red-300"
            >
              View all events →
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-lg border border-zinc-800 bg-[#101014] p-5 transition hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_0_35px_rgba(185,28,28,0.18)]"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-red-500">
                  {event.time}
                </div>

                <h3 className="mt-3 text-xl font-black uppercase text-zinc-100">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400">
                  Hosted by {event.host}
                </p>
              </div>
            ))}

            <Link
              href="/events"
              className="flex min-h-32 items-center justify-center rounded-lg border border-red-800 bg-red-950/20 p-5 text-center font-black uppercase tracking-widest text-red-300 transition hover:bg-red-900/30"
            >
              See full event calendar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}