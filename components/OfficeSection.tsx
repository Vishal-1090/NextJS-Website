import Image from "next/image";

export default function OfficeSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800">
            A Calm Space for Healing
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Our office is thoughtfully designed to provide a warm, private,
            and welcoming environment where you can feel safe to explore
            your thoughts and emotions. From comfortable seating to soft,
            calming tones, every detail supports your well-being.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-72 rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/office1.jpeg"
              alt="Therapy office interior"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-72 rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/office2.jpeg"
              alt="Comfortable counseling space"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-72 rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/office.jpg"
              alt="Private and welcoming therapy room"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Supporting Details */}
        <div className="text-center mt-10 text-neutral-600">
          <p>
            In-person and hybrid sessions are available in a confidential,
            judgment-free setting designed to help you feel at ease from the
            moment you arrive.
          </p>
        </div>

      </div>
    </section>
  );
}