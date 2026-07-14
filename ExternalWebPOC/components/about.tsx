function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-5 items-center justify-center rounded-full bg-accent text-[13px] font-bold leading-none text-accent-foreground">
        +
      </span>
      <span className="text-sm text-foreground/70">{children}</span>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <SectionLabel>Who we are</SectionLabel>

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-balance font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            Welcome to TechCom<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-7">
          <p>
            We aim to build the highway to the future of communications, media and entertainment —
            determined to emerge as a powerhouse within the technology landscape in India.
          </p>
          <p>
            We bring ambitions to life through design thinking that bridges the gaps between people,
            devices and beyond, fostering unprecedented customer satisfaction through technology.
          </p>
          <p>
            Our core values support a customer-centric approach and the harnessing of cutting-edge
            technology to deliver business outcomes with positive societal impact. Guided by
            innovation and a commitment to progress, we&apos;re shaping a brighter future for the
            generations of today and tomorrow.
          </p>
        </div>
      </div>
    </section>
  )
}

export { SectionLabel }
