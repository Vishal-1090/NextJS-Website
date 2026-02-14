import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center min-h-[calc(100vh-140px)]">
         
          <div className="relative w-full max-w-[500px] mx-auto md:mx-0">
            <div
              className="relative aspect-[2/3] w-full overflow-hidden"
              style={{
                clipPath:
                  "ellipse(50% 36% at 50% 33%), polygon(0 33%, 100% 33%, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/images/girl2.jpg"
                alt="Beautiful flowers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

       
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              Healing is a Journey{" "}
              <br />
              every step counts
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-md">
              Therapy for Adults in Santa Monica, CA 
            </p>
            <Link
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-3xl"
            >
              Connect with me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
