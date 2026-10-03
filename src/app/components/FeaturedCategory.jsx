import Image from "next/image";
import Link from "next/link";

export default function FeaturedCategory() {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 lg:gap-20 min-h-fit lg:min-h-[650px]">

        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden group h-[420px] lg:h-auto">
          <Image
            src="/home/faucets.png"
            alt="Faucets and Mixers"
            fill
            className="
              object-cover
              transition
              duration-1000
              group-hover:scale-105
            "
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-black flex items-center py-10 sm:py-14 lg:py-0 lg:pr-20">
          <div className="px-6 sm:px-10 lg:px-0">

            {/* heading */}
            <h2 className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Faucets
            </h2>

            <h3 className="font-heading italic text-white text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-10">
              & Mixers
            </h3>

            {/* description */}
            <p className="text-zinc-400 text-sm sm:text-base leading-6 sm:leading-7 mb-8 sm:mb-10">
             As a trusted <strong>CP Bath Fitting Manufacturer</strong>, we cover every point of use — from bib cocks and angle valves to precision single-lever basin mixers and wall-mounted spouts. Chrome-finished brass and ceramic disc technology ensure lasting smooth operation.
            </p>

            {/* features */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-y-6 mb-8 sm:mb-12">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#b99658]">•</span>
                <span className="text-zinc-300 text-sm sm:text-base">Swan Necks</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#b99658]">•</span>
                <span className="text-zinc-300 text-sm sm:text-base">Sink Mixers</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#b99658]">•</span>
                <span className="text-zinc-300 text-sm sm:text-base">Pillar Cocks</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#b99658]">•</span>
                <span className="text-zinc-300 text-sm sm:text-base">Wall Mixers</span>
              </div>
            </div>

            {/* button */}
            <Link
              href="/collections"
              className="
                inline-flex
                items-center
                gap-3
                sm:gap-4
                text-[#b99658]
                uppercase
                tracking-[2px]
                sm:tracking-[4px]
                text-xs
                sm:text-sm
                border-b
                border-[#b99658]
                pb-2
                sm:pb-3
                hover:gap-5
                sm:hover:gap-6
                transition-all
                duration-300
              "
            >
              View All Faucets
              <span>→</span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}