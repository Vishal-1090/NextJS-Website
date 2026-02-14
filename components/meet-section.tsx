import Image from "next/image"
import Link from "next/link"

export function MeetSection() {
  return (
    <section className="bg-[hsl(var(--section-light))] py-16 md:py-24">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text content left */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[hsl(var(--section-light-fg))] leading-tight">
              {"Dr. Maya Reynolds, PsyD"}
            </h2>
            <p className="text-[hsl(var(--section-light-fg))]/70 text-base md:text-lg leading-relaxed max-w-lg">
             I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions

            </p>
            <Link
              href="#contact"
              className="rounded-3xl inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity self-start mt-2"
            >
              {"Let\u2019s chat"}
            </Link>
          </div>


          <div className="flex flex-col items-center md:items-end gap-6 order-1 md:order-2">
       
            <div className="relative w-full max-w-[400px]">
              <div
                className="relative aspect-[2/3] w-full overflow-hidden"
                style={{
                  clipPath:
                    "ellipse(50% 36% at 50% 33%), polygon(0 33%, 100% 33%, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/images/maya-reynolds.png"
                  alt="Dr. Maya Reynolds"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
