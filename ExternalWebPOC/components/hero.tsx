import Image from "next/image"

const tiles = [
  { src: "/images/network.png", alt: "5G telecommunications tower at golden hour" },
  { src: "/images/cloud.png", alt: "Modern cloud data center server aisle" },
  { src: "/images/iot.png", alt: "Connected smart city skyline at dusk" },
  { src: "/images/team.png", alt: "Engineers collaborating in a modern office" },
]

export function Hero() {
  return (
    <section id="top" className="px-3 pt-3 lg:px-4">
      <div className="rounded-3xl bg-ink px-6 pb-8 pt-20 text-ink-foreground lg:px-10 lg:pb-10 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-ink-foreground/60">
            Shaping the future of telecommunication
          </p>
          <h1 className="mt-6 text-balance font-display text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Get to know us. We&apos;d like to know you.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-foreground/70">
            On a mission to modernize global connectivity, one connection at a time — building the
            highway to the future of communications, media and entertainment.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href="#careers"
              className="rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Explore Careers
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4 lg:gap-4">
          {tiles.map((tile) => (
            <div
              key={tile.src}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5"
            >
              <Image
                src={tile.src || "/placeholder.svg"}
                alt={tile.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
