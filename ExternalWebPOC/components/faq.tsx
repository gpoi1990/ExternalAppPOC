"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { SectionLabel } from "./about"

const faqs = [
  {
    q: "What does BCE Global Tech do?",
    a: "We are on a mission to modernize global connectivity, one connection at a time — building the highway to the future of communications, media and entertainment across 5G, MEC, IoT and cloud-native architecture.",
  },
  {
    q: "Where are you based?",
    a: "We are focused on emerging as a powerhouse within the technology landscape in India, while building connectivity solutions with a global outlook.",
  },
  {
    q: "What technologies do you work with?",
    a: "Our teams pioneer advancements in 5G networks, multi-access edge computing (MEC), the Internet of Things (IoT) and resilient cloud-native architecture.",
  },
  {
    q: "What is it like to work here?",
    a: "We foster a culture built around three pillars — Learn, Explore and Develop — giving you continuous learning, curiosity-driven projects and next-gen challenges to grow your career.",
  },
  {
    q: "How do I apply for a role?",
    a: "Head to our careers section to explore open positions. If you're a thought-leader who wants to shape the future of telecommunication, we'd love to hear from you.",
  },
  {
    q: "What are your core values?",
    a: "A customer-centric approach and the harnessing of cutting-edge technology to deliver business outcomes with positive societal impact for the generations of today and tomorrow.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-medium tracking-tight">{q}</span>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      {open && <p className="max-w-2xl pb-6 leading-relaxed text-foreground/70">{a}</p>}
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionLabel>Questions</SectionLabel>

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-balance font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            FAQ<span className="text-accent">.</span>
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-foreground/60">
            Everything you need to know about who we are and what it&apos;s like to build the future
            with us.
          </p>
        </div>

        <div className="lg:col-span-8">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
