"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "News", href: "#news" },
  { label: "Events", href: "#events" },
  { label: "Careers", href: "#careers" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0055a5] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center" aria-label="TechCom">
          <span className="text-2xl font-semibold tracking-tight text-white">TechCom</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#careers"
            className="rounded-full border border-white bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#0055a5]"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/20 bg-[#0055a5] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-white/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#careers"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-white px-5 py-3 text-center text-sm font-medium text-white"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
