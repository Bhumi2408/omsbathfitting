import Image from "next/image";
import Link from "next/link";

export default function NeoSection() {
  const features = [
    {
      title: "Bib Cocks & Angle Valves",
      value: "Everyday essentials",
    },
    {
      title: "Sink & Wall Mixers",
      value: "Kitchen & wall mounted",
    },
    {
      title: "Chrome Finish",
      value: "Long-lasting shine",
    },
    {
      title: "Basin Mixers",
      value: "Single lever control",
    },
  ];

  return (
    <section className="bg-[#f6f3ee]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-fit lg:min-h-[700px]">

        {/* LEFT CONTENT */}
        <div className="flex items-center py-12 sm:py-16 lg:py-20 order-2 lg:order-1">
          <div className="max-w-[600px] px-6 sm:px-10 lg:px-20">

            {/* heading */}
            <h2 className="font-heading text-black text-5xl sm:text-6xl lg:text-[70px] leading-[0.95]">
              Neo
            </h2>

            <h3 className="font-heading italic text-black text-3xl sm:text-4xl lg:text-[55px] leading-none mb-6 sm:mb-8">
              Collection
            </h3>

            {/* description */}
            <p className="text-zinc-600 text-sm sm:text-base leading-7 sm:leading-[1.9] mb-8 sm:mb-10">
              Crafted for contemporary interiors, the Neo Collection
              covers everyday bathroom and kitchen needs — bib cocks,
              angle valves, sink mixers and wall mixers, finished in
              lasting chrome for a clean, functional look.
            </p>

            {/* features */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-between gap-4 border-b border-zinc-300 pb-3"
                >
                  <span className="font-medium text-sm sm:text-base">
                    {item.title}
                  </span>
                  <span className="text-zinc-400 text-xs sm:text-sm text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* button */}
            <Link
              href="/neo"
              className="
                inline-flex
                items-center
                gap-3
                sm:gap-4
                uppercase
                tracking-[2px]
                sm:tracking-[4px]
                text-[#b99658]
                border-b
                border-[#b99658]
                pb-2
                sm:pb-3
                text-xs
                sm:text-sm
                hover:gap-5
                sm:hover:gap-6
                transition-all
              "
            >
              Explore Neo Collection
              <span>→</span>
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative overflow-hidden group h-[280px] sm:h-[420px] lg:h-auto order-1 lg:order-2">
          <Image
            src="/home/neoss.png"
            alt="Neo Collection"
            fill
            className="
              object-cover
              transition
              duration-1000
              group-hover:scale-105
            "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/20" />
        </div>

      </div>
    </section>
  );
}