import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1115] text-white">
      {/* Hero */}
      <section className="border-b border-yellow-600/20">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <h1 className="text-6xl font-bold tracking-wide text-yellow-400">
            SHADOWVALE
          </h1>

          <p className="mt-6 text-2xl text-gray-300">
            Forged Through PvM.
            <br />
            Built Through Community.
          </p>

          <div className="mt-12 flex justify-center gap-6">
            <Link
              href="/events"
              className="rounded-lg bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Upcoming Events
            </Link>

            <a
              href="https://discord.gg/YOURINVITE"
              target="_blank"
              className="rounded-lg border border-yellow-500 px-8 py-4 transition hover:bg-yellow-500 hover:text-black"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">

        <div className="rounded-xl border border-yellow-600/20 bg-[#181b22] p-8 transition hover:border-yellow-500">
          <h2 className="mb-4 text-3xl font-bold text-yellow-400">
            ⚔ PvM
          </h2>

          <p className="text-gray-300">
            Raids, bossing, learners and end-game PvM events.
          </p>
        </div>

        <div className="rounded-xl border border-yellow-600/20 bg-[#181b22] p-8 transition hover:border-yellow-500">
          <h2 className="mb-4 text-3xl font-bold text-yellow-400">
            📅 Events
          </h2>

          <p className="text-gray-300">
            Join scheduled events hosted directly from our Discord.
          </p>
        </div>

        <div className="rounded-xl border border-yellow-600/20 bg-[#181b22] p-8 transition hover:border-yellow-500">
          <h2 className="mb-4 text-3xl font-bold text-yellow-400">
            🎓 Teaching
          </h2>

          <p className="text-gray-300">
            Learn every raid with experienced teachers.
          </p>
        </div>

      </section>
    </main>
  );
}