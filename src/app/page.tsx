import Link from "next/link";

const featureCards = [
  {
    title: "Agentic Interfaces",
    description: "Design adaptive experiences that respond to user intent in real time."
  },
  {
    title: "Composable Workflows",
    description: "Chain together data sources, AI models, and business logic without friction."
  },
  {
    title: "Launch Ready",
    description: "Deploy to Vercel in seconds with production-grade defaults baked in."
  }
];

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-neutral-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 blur-[120px]">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-emerald-400 opacity-30 mix-blend-screen" />
        <div className="absolute bottom-12 right-1/5 h-52 w-52 rounded-full bg-cyan-400 opacity-30 mix-blend-screen" />
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-20 px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 shadow-lg shadow-primary/5 backdrop-blur">
            👋 Hi there, welcome aboard
          </span>
          <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
            Build bold agentic web experiences.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
            Jumpstart your next project with a modern Next.js + Tailwind stack. Crafted for velocity, ready for AI-native
            interfaces, and tuned for effortless Vercel deploys.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Start Exploring
            </Link>
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Next.js Docs
            </Link>
          </div>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-primary/70 hover:bg-slate-900/70"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/40 blur-3xl transition group-hover:bg-primary/70" />
              <div className="relative flex flex-col gap-3">
                <h2 className="font-display text-2xl text-white">{card.title}</h2>
                <p className="text-sm text-slate-300">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          id="get-started"
          className="relative w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-left shadow-xl shadow-primary/10"
        >
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/30 to-transparent opacity-80" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <h3 className="font-display text-3xl text-white">Ready to ship in seconds.</h3>
              <p className="text-sm text-slate-300">
                Run the dev server locally, push to your repo, and deploy with a single Vercel command. This starter is
                optimized for fast iteration and modern AI-first product ideas.
              </p>
            </div>
            <code className="rounded-xl border border-slate-800 bg-black/40 px-4 py-3 font-mono text-sm text-slate-200">
              npm run dev
            </code>
          </div>
        </div>
      </section>
    </main>
  );
}
