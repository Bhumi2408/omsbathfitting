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
      text: "We specify OM's for ultra-luxury residences. The Noir series is particularly striking.",
      name: "SARAH THOMAS",
      designation: "LEAD DESIGNER, SPACE MATRIX",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-black py-24 overflow-hidden px-28"
    >
      <div className="max-w-[1700px] mx-auto px-10">

        {/* Heading */}
        <div className="text-center mb-24">
          <p
            className="
              text-[#b99658]
              uppercase
              tracking-[8px]
              text-sm
              mb-4
            "
          >
            Voices
          </p>

          <h2
            className="
              font-heading
              text-white
              text-6xl
            "
          >
            What the Experts Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-16">

          {testimonials.map((item) => (
            <div key={item.name} className="group">

              {/* Quote */}
              <div
                className="
                  text-[#b99658]
                  text-5xl
                  leading-none
                  mb-6
                  opacity-70
                "
              >
                "
              </div>

              {/* Text */}
              <p
                className="
                  font-heading
                  italic
                  text-[24px]
                  leading-[1.6]
                  text-[#f4ede4]
                  mb-14
                  transition
                  duration-500
                  group-hover:text-white
                "
              >
                {item.text}
              </p>

              {/* Divider */}
              <div className="h-px bg-[#1c1c1c] mb-6"></div>

              {/* Author */}
              <h4
                className="
                  text-[#b99658]
                  tracking-[3px]
                  uppercase
                  text-sm
                  mb-3
                "
              >
                {item.name}
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}