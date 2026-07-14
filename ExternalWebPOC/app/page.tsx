import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Capabilities } from "@/components/capabilities"
import { Pillars } from "@/components/pillars"
import { News } from "@/components/news"
import { Events } from "@/components/events"
import { CareersCta } from "@/components/careers-cta"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <Capabilities />
      <Pillars />
      <News />
      <Events />
      <CareersCta />
      <Faq />
      <SiteFooter />
    </main>
  )
}
