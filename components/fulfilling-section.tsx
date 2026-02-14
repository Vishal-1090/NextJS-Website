import Image from "next/image"
import Link from "next/link"

export function FulfillingSection() {
  return (
    <section className="relative bg-[hsl(var(--section-light))]">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="order-2 md:order-1 px-6 md:px-10 lg:px-16 py-16 md:py-24 flex flex-col justify-center gap-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[hsl(var(--section-light-fg))] leading-tight">
              Progess Not Perfection
            </h2>
            <p className="text-[hsl(var(--section-light-fg))]/70 text-base md:text-lg leading-relaxed max-w-lg">
              {"You are stronger than your struggles, and every step you take toward healing matters"}
            </p>
            <p className="text-[hsl(var(--section-light-fg))]/70 text-base md:text-lg leading-relaxed max-w-lg">
              {"Choosing growth, self-care, and support is a powerful decision that leads to lasting change."}
            </p>
            <Link
              href="#contact"
              className="inline-block border border-[hsl(var(--section-light-fg))] text-[hsl(var(--section-light-fg))] px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-[hsl(var(--section-light-fg))] hover:text-[hsl(var(--section-light))] transition-colors self-start mt-2"
            >
              Get in touch
            </Link>
          </div>

          
          <div className="order-1 md:order-2 relative min-h-[100px] md:min-h-[100px]">
            <Image
              src="/images/happy.jpg"
              alt="Person walking through flowers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
