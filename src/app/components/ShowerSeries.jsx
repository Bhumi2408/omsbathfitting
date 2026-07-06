import Image from "next/image";
import Link from "next/link";


const ShowerSeries = () => {
 const features = [
    "Ceiling Rain",
    "Wall Arm",
    "Thermostatic",
    "LED Chromotherapy",
  ];

  return (
    <section className="relative h-[700px] overflow-hidden">

      {/* Background */}
      <Image
        src="/home/shower.png" // apni image lagao
        alt="Rain Shower"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Luxury vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-[1800px] mx-auto w-full px-20 pb-20">

          <div className="max-w-[700px]">

            {/* title */}
            <h2
              className="
                font-heading
                text-white
                text-[65px]
                leading-[0.95]
              "
            >
              Rain Showers
            </h2>

            <h3
              className="
                font-heading
                italic
                text-white
                text-[55px]
                leading-[1]
                mb-6
              "
            >
              & Overhead
            </h3>

            {/* description */}
            <p
              className="
                text-zinc-300
                leading-[1.8]
                max-w-[650px]
                mb-6
              "
            >
              Cascade into stillness. Our overhead rain
              systems transform the daily ritual of
              bathing into a meditative experience.
              From 8" to 24" rainfall heads.
            </p>

            {/* features */}
            <div className="flex flex-wrap gap-3 mb-8">

              {features.map((item) => (
                <div
                  key={item}
                  className="
                    px-5
                    py-3
                    border
                    border-white/10
                    bg-black/30
                    backdrop-blur-md
                    text-zinc-300
                    uppercase
                    tracking-[3px]
                    text-xs
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
                gap-5
                text-[#b99658]
                uppercase
                tracking-[4px]
                border-b
                border-[#b99658]
                pb-3
                text-sm
                hover:gap-7
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
}

export default ShowerSeries