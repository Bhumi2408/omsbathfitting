import Image from "next/image";
import Link from "next/link";

const ShowerSeries = () => {
  const features = ["Rain Shower", "Overhead Shower", "Sandwich Shower", "Hand Shower"];

  return (
    <section className="relative h-[520px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background */}
      <Image
        src="/home/shower.png"
        alt="Rain Shower"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-12 lg:px-20 pb-10 sm:pb-16 lg:pb-20">
          <div className="max-w-[700px]">
            {/* title */}
            <h2 className="font-heading text-white text-3xl sm:text-5xl lg:text-[65px] leading-[0.95]">
              Rain Showers
            </h2>

            <h3 className="font-heading italic text-white text-2xl sm:text-4xl lg:text-[55px] leading-[1] mb-4 sm:mb-6">
              & Overhead
            </h3>

            {/* description */}
            <p className="text-zinc-300 text-sm sm:text-base leading-6 sm:leading-[1.8] max-w-[650px] mb-5 sm:mb-6">
              Transform the daily ritual of bathing into a moment of
              stillness. Our rain and overhead showers are available
              from 6"x6" up to 16"x16" in premium brass and stainless
              steel finishes.
            </p>

            {/* features */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {features.map((item) => (
                <div
                  key={item}
                  className="
                    px-3
                    py-2
                    sm:px-5
                    sm:py-3
                    border
                    border-white/10
                    bg-black/30
                    backdrop-blur-md
                    text-zinc-300
                    uppercase
                    tracking-[1px]
                    sm:tracking-[3px]
                    text-[10px]
                    sm:text-xs
                    hover:border-[#b99658]
                    hover:text-[#b99658]
                    transition-all
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* button */}
            <Link
              href="/showers"
              className="
                inline-flex
                items-center
                gap-3
                sm:gap-5
                text-[#b99658]
                uppercase
                tracking-[2px]
                sm:tracking-[4px]
                border-b
                border-[#b99658]
                pb-2
                sm:pb-3
                text-xs
                sm:text-sm
                hover:gap-5
                sm:hover:gap-7
                transition-all
                duration-300
              "
            >
              Explore Shower Range
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowerSeries;