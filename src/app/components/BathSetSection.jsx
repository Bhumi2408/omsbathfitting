import Image from "next/image";
import Link from "next/link";
import { Bath, Gem, Droplets, Sparkles } from "lucide-react";

export default function BathSetSection() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-0 items-stretch">
          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden bg-black w-full aspect-[16/9] lg:aspect-auto h-[650px] lg:h-[950px] group order-1">
            <Image
              src="/home/bath1.png"
              fill
              alt="Bath Set"
              className="
                object-contain
                lg:object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-black/20 hidden lg:block" />
          </div>

          {/* CENTER CONTENT */}
          <div className="bg-[#0a0a0a] flex items-center py-10 sm:py-14 lg:py-16 order-2">
            <div className="w-full max-w-[560px] mx-auto px-6 sm:px-10 lg:px-14">
              {/* heading */}
              <h2 className="font-heading text-white text-4xl sm:text-5xl lg:text-[62px] leading-none">
                Bath Sets
              </h2>

              <h3 className="font-heading italic text-[#b99658] text-2xl sm:text-3xl lg:text-[48px] leading-none mt-2 mb-4 sm:mb-5">
                Elegance. Every Day.
              </h3>

              {/* divider */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-16 sm:w-24 h-[1px] bg-[#b99658]/40"></div>
                <div className="text-[#b99658] text-lg sm:text-xl">✦</div>
              </div>

              {/* desc */}
              <p className="text-zinc-400 text-sm sm:text-base leading-7 sm:leading-[2] mb-8 sm:mb-10">
                Premium bathroom accessory sets — towel racks, robe hooks,
                soap dishes and tumbler holders — finished in mirror-polished
                chrome for a coordinated, everyday-luxury bathroom look.
              </p>

              {/* features */}
              <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
                <div className="flex gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full bg-[#b99658]/10 flex items-center justify-center">
                    <Bath size={24} strokeWidth={1.5} className="text-[#b99658] sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="text-white tracking-[2px] uppercase mb-1 sm:mb-2 text-sm sm:text-base">
                      Complete Accessory Sets
                    </h4>
                    <p className="text-zinc-500 text-xs sm:text-sm">
                      Towel racks, rings & rods for a matching look.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full bg-[#b99658]/10 flex items-center justify-center">
                    <Gem size={24} strokeWidth={1.5} className="text-[#b99658] sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="text-white tracking-[2px] uppercase mb-1 sm:mb-2 text-sm sm:text-base">
                      Chrome-Finished Hardware
                    </h4>
                    <p className="text-zinc-500 text-xs sm:text-sm">
                      Soap dishes & robe hooks built to last.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full bg-[#b99658]/10 flex items-center justify-center">
                    <Droplets size={24} strokeWidth={1.5} className="text-[#b99658] sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="text-white tracking-[2px] uppercase mb-1 sm:mb-2 text-sm sm:text-base">
                      Everyday Convenience
                    </h4>
                    <p className="text-zinc-500 text-xs sm:text-sm">
                      Tumbler holders & liquid soap dispensers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full bg-[#b99658]/10 flex items-center justify-center">
                    <Sparkles size={24} strokeWidth={1.5} className="text-[#b99658] sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="text-white tracking-[2px] uppercase mb-1 sm:mb-2 text-sm sm:text-base">
                      Timeless Finishes
                    </h4>
                    <p className="text-zinc-500 text-xs sm:text-sm">
                      Finishes that stay beautiful for years.
                    </p>
                  </div>
                </div>
              </div>

              {/* button */}
              <Link
                href="/bath-set"
                className="
                  border
                  border-[#b99658]
                  px-5
                  py-3.5
                  sm:px-6
                  sm:py-5
                  text-[#b99658]
                  uppercase
                  tracking-[2px]
                  sm:tracking-[4px]
                  flex
                  items-center
                  justify-center
                  sm:justify-start
                  gap-4
                  sm:gap-8
                  text-xs
                  sm:text-sm
                  hover:bg-[#b99658]
                  hover:text-black
                  transition-all
                  w-fit
                "
              >
                Explore Bath Sets
                <span className="text-xl sm:text-2xl">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative overflow-hidden bg-black w-full aspect-[16/9] lg:aspect-auto h-[700px] lg:h-[950px] group order-3">
            <Image
              src="/home/bath2.png"
              fill
              alt="Bath Set"
              className="
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-black/30 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}