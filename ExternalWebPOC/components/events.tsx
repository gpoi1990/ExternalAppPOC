import { SectionLabel } from "./about"

const events = [
  {
    month: "JUN",
    day: "18",
    title: "Future of Connectivity Summit",
    location: "Toronto, ON",
    type: "Conference",
    body: "Join our engineers as they unpack the roadmap for 5G, MEC and cloud-native networks.",
  },
  {
    month: "JUL",
    day: "09",
    title: "TechCom Engineering Open House",
    location: "Virtual",
    type: "Webinar",
    body: "Meet the teams building intelligent infrastructure and explore open roles across the org.",
  },
  {
    month: "AUG",
    day: "22",
    title: "Edge & IoT Developer Workshop",
    location: "Montreal, QC",
    type: "Workshop",
    body: "A hands-on day of building real-time applications on the edge with our platform team.",
  },
]

export function Events() {
  return (
    <section id="events" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionLabel>What's happening</SectionLabel>
        <h2 className="mt-10 max-w-3xl text-balance font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
          Upcoming events.
        </h2>

        <div className="mt-16 flex flex-col gap-4">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col gap-6 rounded-3xl border border-border bg-background p-8 transition-colors hover:border-foreground/30 sm:flex-row sm:items-center"
            >
              <div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#0055a5] text-white">
                <span className="text-xs font-medium uppercase tracking-wide">{event.month}</span>
                <span className="font-display text-3xl font-light leading-none">{event.day}</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-sm text-foreground/60">
                  <span className="font-medium text-[#0055a5]">{event.type}</span>
                  <span aria-hidden>•</span>
                  <span>{event.location}</span>
                </div>
                <h3 className="font-display text-2xl font-normal tracking-tight">{event.title}</h3>
                <p className="text-pretty leading-relaxed text-foreground/70">{event.body}</p>
              </div>
              <a
                href="#events"
                className="mt-2 shrink-0 rounded-full border border-[#0055a5] px-6 py-2.5 text-center text-sm font-medium text-[#0055a5] transition-colors hover:bg-[#0055a5] hover:text-white sm:ml-auto sm:mt-0"
              >
                Register
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
