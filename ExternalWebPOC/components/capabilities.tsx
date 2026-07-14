import { SectionLabel } from "./about"

const areas = [
  {
    title: "5G",
    body: "Next-generation networks engineered for speed, ultra-low latency and the scale that tomorrow's experiences demand.",
  },
  {
    title: "MEC",
    body: "Multi-access edge computing that brings processing closer to users, powering real-time, data-heavy applications.",
  },
  {
    title: "IoT",
    body: "Connecting billions of devices into intelligent ecosystems that bridge people, machines and everything between.",
  },
  {
    title: "Cloud-native",
    body: "Resilient, cloud-native architecture built to modernize connectivity and evolve with a fast-moving world.",
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel>What we build</SectionLabel>
        <h2 className="mt-10 max-w-3xl text-balance font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
          Pioneering advancements across the technology stack.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-card lg:p-12"
            >
              <h3 className="font-display text-3xl font-normal tracking-tight lg:text-4xl">
                {area.title}
              </h3>
              <p className="text-pretty leading-relaxed text-foreground/70">{area.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
