import Image from "next/image"
import Link from "next/link"

const challenges = [
  "Persistent feelings of anxiety, stress, or emotional overwhelm affecting daily functioning",
  "Difficulty managing negative thoughts, self-doubt, or low self-esteem",
  "Challenges in personal relationships, communication, or conflict resolution",
  "Experiencing mood fluctuations, lack of motivation, or prolonged sadness",
  "Struggles with work-life balance, burnout, or performance pressure",
]

export function ChallengeSection() {
  return (
    <section className="relative bg-[hsl(var(--section-bright))] text-[hsl(var(--section-bright-fg))]">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="relative min-h-[400px] md:min-h-[600px]">
            <Image
              src="/images/challenge.jpg"
              alt="Challenges"
              fill
              className="object-cover"
            />
          </div>

         
          <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24 flex flex-col justify-center gap-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              {"If you face all these  then your are at right place "}
              
            </h2>
            <p className="opacity-80 text-base md:text-lg">
              
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {challenges.map((item) => (
                <li key={item} className="flex items-start gap-3 opacity-80">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="opacity-80 text-base md:text-lg mt-2">
              {"With empathy and guidance, we\u2019ll work together to navigate the challenges life throws your way."}
            </p>
            <Link
              href="#contact"
              className="rounded-3xl inline-block border border-current px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-[hsl(var(--section-bright-fg))] hover:text-[hsl(var(--section-bright))] transition-colors self-start mt-2"
            >
              Work with me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
