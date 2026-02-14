"use client"

import { useState } from "react"

const credentials = [
  {
    title: "Education",
    description:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Licensure",
    description:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Certifications",
    description:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
]

export function BackgroundSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[hsl(var(--section-light))] py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <h3 className="font-serif text-2xl md:text-3xl text-center text-[hsl(var(--section-light-fg))] mb-10">
          My Professional Background
        </h3>
        <ul className="flex flex-col">
          {credentials.map((item, idx) => (
            <li key={idx} className="border-t border-border/50">
              <button
                className="w-full flex items-center justify-between py-4 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg md:text-xl text-[hsl(var(--section-light-fg))]">
                  {item.title}
                </span>
                <div
                  className={`relative w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-45" : ""
                  }`}
                >
                  <span className="absolute top-1/2 left-0 w-full h-px bg-[hsl(var(--section-light-fg))] -translate-y-1/2" />
                  <span className="absolute top-0 left-1/2 w-px h-full bg-[hsl(var(--section-light-fg))] -translate-x-1/2" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-[hsl(var(--section-light-fg))]/60 text-sm md:text-base leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
          <li className="border-t border-border/50" />
        </ul>
      </div>
    </section>
  )
}
