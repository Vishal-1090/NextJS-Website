import Image from "next/image"

const specialties = [
  {
    title: "Anxiety & Stress Management",
    description:
      " Helping individuals develop healthy coping strategies and emotional regulation skills.",
    image: "/images/stress.jpg",
  },
  {
    title: "Depression & Mood Disorders",
    description:
      " Providing structured support to improve emotional balance and overall well-being.",
    image: "/images/depression.jpg",
  },
  {
    title: "Personal Growth Counseling",
    description:
      "Strengthening communication skills, self-awareness, and interpersonal relationships.",
    image: "/images/growth.webp",
  },
]

export function SpecialtiesSection() {
  return (
    <section className="bg-[hsl(var(--section-white))] py-20 md:py-28">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
      
        <p className="text-3xl text-center text-[hsl(var(--section-white-fg))]/60  md:text-base tracking-widest uppercase mb-12 md:mb-16">
          My Specialties
        </p>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="bg-[hsl(var(--section-light))] p-5 flex flex-col gap-4"
            >
              <h2 className="font-serif text-xl md:text-2xl text-[hsl(var(--section-white-fg))]">
                {item.title}
              </h2>
              <p className="text-[hsl(var(--section-white-fg))]/70 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
              <div className="mt-auto pt-4 flex justify-center">
                <div className="relative w-3/4 aspect-square rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
