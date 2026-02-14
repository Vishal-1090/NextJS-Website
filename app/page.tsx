import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FulfillingSection } from "@/components/fulfilling-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { ChallengeSection } from "@/components/challenge-section"
import { MeetSection } from "@/components/meet-section"
import { FaqSection } from "@/components/faq-section"
import { BackgroundSection } from "@/components/background-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import OfficeSection from "@/components/OfficeSection";

export default function Page() {
  return (
    <>
      <Header />
      <main id="page" role="main">
        <HeroSection />
        <FulfillingSection />
        <SpecialtiesSection />
        <ChallengeSection />
        <MeetSection />
        <FaqSection />
        <OfficeSection />
        <BackgroundSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
