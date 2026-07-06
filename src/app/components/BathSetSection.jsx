import Image from "next/image";
import Link from "next/link";
import { Bath, Gem, Droplets, Sparkles } from "lucide-react";

export default function BathSetSection() {
  const features = [
    "Rain Showers",
    "Wall Mixers",
    "Hand Showers",
    "Concealed Sets",
  ];

  return (
    <section className="bg-black overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1fr_1fr] gap-0 items-stretch">
          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden h-[950px] group">
            <Image
              src="/home/bath1.png"
              fill
              alt="Bath Set"
              className="
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* CENTER CONTENT */}
          <div className="bg-[#0a0a0a] flex items-center py-16">
            <div className="w-full max-w-[560px] mx-auto px-14">
              {/* heading */}
              <h2
                className="
      font-heading
      text-white
      text-[62px]
      leading-none
    "
              >
                Bath Sets
              </h2>

              <h3
                className="
      font-heading
      italic
      text-[#b99658]
      text-[48px]
      leading-none
      mt-2
      mb-5
    "
              >
                Elegance. Every Day.
              </h3>

              {/* divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-24 h-[1px] bg-[#b99658]/40"></div>

                <div className="text-[#b99658] text-xl">✦</div>
              </div>

              {/* desc */}
              <p
                className="
      text-zinc-400
      
      leading-[2]
      mb-10
    "
              >
                Thoughtfully designed bath sets that bring together form and
                function. From everyday essentials to statement pieces, elevate
                your space with lasting beauty and performance.
              </p>

              {/* features */}
              <div className="space-y-6 mb-10">
                <div className="flex gap-6">
                  <div
                    className="
      w-16
      h-16
      rounded-full
      bg-[#b99658]/10
      flex
      items-center
      justify-center
    "
                  >
                    <Bath
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#b99658]"
                    />
                  </div>

                  <div>
                    <h4
                      className="
        text-white
        tracking-[2px]
        uppercase
        mb-2
      "
                    >
                      Complete Solutions
                    </h4>

                    <p className="text-zinc-500 text-sm">
                      Coordinated sets for a seamless look.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div
                    className="
      w-16
      h-16
      rounded-full
      bg-[#b99658]/10
      flex
      items-center
      justify-center
    "
                  >
                    <Gem
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#b99658]"
                    />
                  </div>

                  <div>
                    <h4
                      className="
        text-white
        tracking-[2px]
        uppercase
        mb-2
      "
                    >
                      Premium Materials
                    </h4>

                    <p className="text-zinc-500 text-sm">
                      Built with precision and durability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div
                    className="
      w-16
      h-16
      rounded-full
      bg-[#b99658]/10
      flex
      items-center
      justify-center
    "
                  >
                    <Droplets
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#b99658]"
                    />
                  </div>

                  <div>
                    <h4
                      className="
        text-white
        tracking-[2px]
        uppercase
        mb-2
      "
                    >
                      Everyday Luxury
                    </h4>

                    <p className="text-zinc-500 text-sm">
                      Designed for comfort & convenience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div
                    className="
      w-16
      h-16
      rounded-full
      bg-[#b99658]/10
      flex
      items-center
      justify-center
    "
                  >
                    <Sparkles
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#b99658]"
                    />
                  </div>

                  <div>
                    <h4
                      className="
        text-white
        tracking-[2px]
        uppercase
        mb-2
      "
                    >
                      Timeless Finishes
                    </h4>

                    <p className="text-zinc-500 text-sm">
                      Finishes that stay beautiful for years.
                    </p>
                  </div>
                </div>
              </div>

              {/* button */}
              <button
                className="
        border
        border-[#b99658]
        px-6
        py-5
        text-[#b99658]
        uppercase
        tracking-[4px]
        flex
        items-center
        gap-8
        text-sm
        hover:bg-[#b99658]
        hover:text-black
        transition-all
      "
              >
                Explore Bath Sets
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative overflow-hidden h-[950px] group">
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

            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
