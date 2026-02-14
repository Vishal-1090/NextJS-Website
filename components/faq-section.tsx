"use client"

import { useState } from "react"
import Image from "next/image"

const faqs = [
  {
    question: "How do I know if I need to see a psychologist?",
    answer: "Answer goes here.",
  },
  {
    question: "Is everything I share confidential?",
    answer: "Answer goes here.",
  },
  {
    question: " How long does therapy take?",
    answer: "Answer goes here.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          
          <div className="relative w-full max-w-[400px] mx-auto md:mx-0">
            <div
              className="relative aspect-[2/3] w-full overflow-hidden"
              style={{
                clipPath:
                  "ellipse(50% 36% at 50% 33%), polygon(0 33%, 100% 33%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/images/office.jpg"
                alt="Office image"
                fill
                className="object-cover"
              />
            </div>
          </div>

  
          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              FAQs
            </h2>
            <ul className="flex flex-col">
              {faqs.map((faq, idx) => (
                <li key={idx} className="border-t border-border">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left"
                    onClick={() =>
                      setOpenIndex(openIndex === idx ? null : idx)
                    }
                    aria-expanded={openIndex === idx}
                  >
                    <span className="font-serif text-lg md:text-xl text-foreground pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`relative w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === idx ? "rotate-45" : ""
                      }`}
                    >
                      <span className="absolute top-1/2 left-0 w-full h-px bg-foreground -translate-y-1/2" />
                      <span className="absolute top-0 left-1/2 w-px h-full bg-foreground -translate-x-1/2" />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === idx ? "max-h-40 pb-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
                      {faq.answer}
                    </p>
                  </div>
                </li>
              ))}
              <li className="border-t border-border" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
