import Image from "next/image";
import Link from "next/link";

export default function FeaturedCategory() {
  return (
    <section className="bg-black">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-20 min-h-[650px]">

        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden group">
          <Image
            src="/home/series1.png" // apni image lagao
            alt="Luxury Faucet"
            fill
            className="
              object-cover
              transition
              duration-1000
              group-hover:scale-105
            "
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/20" />

        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-black flex items-center pr-20">
          <div>

            {/* heading */}
            <h2
              className="
                font-heading
                text-white
                text-6xl
                leading-[1.05]
              "
            >
              Faucets
            </h2>

            <h3
              className="
                font-heading
                italic
                text-white
                text-5xl
                mb-10
              "
            >
              & Mixers
            </h3>

            {/* description */}
            <p
              className="
                text-zinc-400
                leading-6
                mb-10
              "
            >
              From wall-mounted waterfall spouts to
              precision single-lever basin mixers —
              our faucet range redefines what it means
              to interact with water. Ceramic disc
              cartridges guarantee lifetime smoothness.
            </p>

            {/* features */}
            <div className="grid grid-cols-2 gap-y-6 mb-12">

              <div className="flex items-center gap-4">
                <span className="text-[#b99658]">•</span>
                <span className="text-zinc-300">
                  Wall-Mounted
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#b99658]">•</span>
                <span className="text-zinc-300">
                  Counter-Top
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#b99658]">•</span>
                <span className="text-zinc-300">
                  Pillar Cocks
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#b99658]">•</span>
                <span className="text-zinc-300">
                  Waterfall Spouts
                </span>
              </div>

            </div>

            {/* button */}
            <Link
              href="/faucets"
              className="
                inline-flex
                items-center
                gap-4
                text-[#b99658]
                uppercase
                tracking-[4px]
                border-b
                border-[#b99658]
                pb-3
                hover:gap-6
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