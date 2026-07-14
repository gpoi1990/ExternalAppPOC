import Image from "next/image"

const columns = [
  {
    title: "Company",
    links: ["About", "Capabilities", "Careers", "FAQ"],
  },
  {
    title: "Focus areas",
    links: ["5G", "MEC", "IoT", "Cloud-native"],
  },
  {
    title: "Connect",
    links: ["LinkedIn", "Twitter / X", "Instagram", "YouTube"],
  },
]

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-12 pt-8 lg:px-10">
      <div className="grid gap-12 border-t border-border pt-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="font-display text-3xl font-semibold tracking-tight">
            bce<span className="text-accent">.</span>
          </span>
          <p className="mt-5 max-w-sm text-pretty leading-relaxed text-foreground/60">
            Shaping the future of telecommunication — modernizing global connectivity, one
            connection at a time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-foreground/50 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} BCE Global Tech. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
