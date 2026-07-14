import { SectionLabel } from "./about"

const pillars = [
  {
    title: "Learn",
    body: "Empower your skills with cutting-edge technology and continuous learning opportunities.",
  },
  {
    title: "Explore",
    body: "Discover and unleash your curiosity with innovative projects that foster growth.",
  },
  {
    title: "Develop",
    body: "Dive into new challenges and expand your horizons in next-gen tech programs.",
  },
]

export function Pillars() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionLabel>How you grow with us</SectionLabel>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 lg:p-10"
          >
            <span className="font-mono text-sm text-accent">{`0${i + 1}`}</span>
            <h3 className="font-display text-3xl font-light tracking-tight">{pillar.title}</h3>
            <p className="text-pretty leading-relaxed text-foreground/70">{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
