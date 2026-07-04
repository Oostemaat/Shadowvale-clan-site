import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const events = [
  { image: "/events/event-1.png", time: "Tomorrow at 7:00PM", title: "Zulrah Mass", host: "Shadowvale" },
  { image: "/events/event-2.png", time: "Saturday at 8:00PM", title: "ToB Learner Raid", host: "Parkway Dry" },
  { image: "/events/event-3.png", time: "Sunday at 6:00PM", title: "CoX Teaching", host: "Shadowvale" },
];

export default function HomeEvents() {
  return (
    <section className="border-t border-red-950/60 bg-[#08090b] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-2xl font-black uppercase tracking-widest text-zinc-200">Upcoming Events</h2>
            <div className="hidden h-px w-40 bg-gradient-to-r from-red-700 to-transparent md:block" />
          </div>
          <Link href="/events" className="text-sm font-black uppercase tracking-widest text-red-400 hover:text-red-300">View all events →</Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr_0.75fr]">
          {events.map((event) => (
            <div key={event.title} className="group grid overflow-hidden rounded-lg border border-zinc-800 bg-[#0f1014] transition hover:-translate-y-1 hover:border-red-700 hover:shadow-[0_0_35px_rgba(185,28,28,.18)] sm:grid-cols-[120px_1fr]">
              <div className="relative h-32 sm:h-full">
                <Image src={event.image} alt="" fill className="object-cover opacity-80 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-500"><CalendarDays size={14} />{event.time}</div>
                <h3 className="mt-3 text-lg font-black uppercase tracking-wide text-zinc-100">{event.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">Hosted by {event.host}</p>
              </div>
            </div>
          ))}

          <Link href="/events" className="flex min-h-32 items-center justify-center rounded-lg border border-red-800 bg-red-950/20 p-5 text-center font-black uppercase tracking-widest text-red-300 transition hover:bg-red-900/30">
            See full<br />event calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
