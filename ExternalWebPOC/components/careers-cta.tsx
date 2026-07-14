import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function CareersCta() {
  return (
    <section id="careers" className="px-3 pb-3 lg:px-4">
      <div className="relative overflow-hidden rounded-3xl bg-ink text-ink-foreground">
        <Image
          src="/images/team.png"
          alt="BCE Global Tech engineers collaborating"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-36">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-ink-foreground/60">
            Join the team
          </p>
          <h2 className="mt-6 text-balance font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-ink-foreground/70">
            If you&apos;d like to be part of a team of thought-leaders pioneering advancements in 5G,
            MEC, IoT and cloud-native architecture, we&apos;d love to hear from you.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Explore Careers
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
