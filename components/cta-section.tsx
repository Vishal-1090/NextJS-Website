import Link from "next/link"

export function CtaSection() {
  return (
    <section className="bg-[hsl(var(--section-dark))] text-[hsl(var(--section-dark-fg))] py-20 md:py-32">
      <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center flex flex-col items-center gap-6">
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
          Get started today.
        </h3>
        <p className="opacity-80 text-base md:text-lg leading-relaxed max-w-xl">
          Seeking support from a licensed clinical psychologist is a courageous step toward personal growth and emotional well-being.
          <br />
          Professional guidance can help you better understand your thoughts, manage challenges, and build healthier coping strategies. With the right support, positive change and a more balanced, fulfilling life are absolutely possible.
        </p>
        <Link
          href="#contact"
          className="rounded-3xl inline-block bg-[hsl(var(--section-dark-fg))] text-[hsl(var(--section-dark))] px-8 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity mt-4 "
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
