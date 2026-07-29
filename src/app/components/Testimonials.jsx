export default function Testimonials() {
  const testimonials = [
    {
      text: "OM's transforms the mundane into the ceremonial. Their pieces are architectural anchors.",
      name: "PRIYA KAPOOR",
      designation: "PRINCIPAL ARCHITECT, STUDIO KAPOOR",
    },
    {
      text: "The build quality and finish consistency are unparalleled. True luxury hardware.",
      name: "VIKRAM AHUJA",
      designation: "DIRECTOR, AHUJA INTERIOR DESIGNS",
    },
    {
      text: "We specify OM's for premium residential projects. The Quba series is particularly striking.",
      name: "SARAH THOMAS",
      designation: "LEAD DESIGNER, SPACE MATRIX",
    },
  ];

  return (
    <section id="testimonials" className="bg-black py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-14 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-20 lg:mb-24">
          <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-3 sm:mb-4">
            Voices
          </p>

          <h2 className="font-heading text-white text-3xl sm:text-5xl lg:text-6xl">
            What the Experts Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {testimonials.map((item) => (
            <div key={item.name} className="group">
              {/* Quote */}
              <div className="text-[#b99658] text-4xl sm:text-5xl leading-none mb-4 sm:mb-6 opacity-70">
                "
              </div>

              {/* Text */}
              <p className="font-heading italic text-lg sm:text-xl lg:text-[24px] leading-7 sm:leading-[1.6] text-[#f4ede4] mb-8 sm:mb-14 transition duration-500 group-hover:text-white">
                {item.text}
              </p>

              {/* Divider */}
              <div className="h-px bg-[#1c1c1c] mb-5 sm:mb-6"></div>

              {/* Author */}
              <h4 className="text-[#b99658] tracking-[2px] sm:tracking-[3px] uppercase text-xs sm:text-sm mb-3">
                {item.name}
              </h4>

              <p className="text-zinc-500 text-[10px] sm:text-xs tracking-[1px] uppercase">
                {item.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}