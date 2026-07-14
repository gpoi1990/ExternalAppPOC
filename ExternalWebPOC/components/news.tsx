import { SectionLabel } from "./about"

const articles = [
  {
    date: "May 12, 2026",
    category: "Announcement",
    title: "TechCom expands 5G research lab to accelerate edge innovation",
    body: "Our new facility doubles capacity for testing ultra-low-latency networks and next-generation edge workloads.",
  },
  {
    date: "April 28, 2026",
    category: "Partnership",
    title: "Strategic collaboration brings AI-driven observability to carrier networks",
    body: "A multi-year agreement will embed intelligent monitoring across large-scale telecommunication infrastructure.",
  },
  {
    date: "April 3, 2026",
    category: "Recognition",
    title: "TechCom named a top employer for engineering talent in 2026",
    body: "The award recognizes our commitment to growth, inclusion and meaningful technical work.",
  },
]

export function News() {
  return (
    <section id="news" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel>Newsroom</SectionLabel>
        <h2 className="mt-10 max-w-3xl text-balance font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
          The latest from TechCom.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <span className="font-medium text-[#0055a5]">{article.category}</span>
                <span aria-hidden>•</span>
                <time>{article.date}</time>
              </div>
              <h3 className="text-balance font-display text-2xl font-normal leading-snug tracking-tight">
                {article.title}
              </h3>
              <p className="text-pretty leading-relaxed text-foreground/70">{article.body}</p>
              <a
                href="#news"
                className="mt-2 text-sm font-medium text-[#0055a5] transition-colors hover:text-foreground"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
