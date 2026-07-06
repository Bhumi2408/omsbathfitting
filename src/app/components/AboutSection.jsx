import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#f8f6f2] py-20 overflow-hidden px-10" id="about">
      <div className="max-w-[1700px] mx-auto px-10">

        {/* heading */}
        
        {/* content */}
        <div className="grid lg:grid-cols-[0.9fr_1.2fr_0.7fr] gap-14">

          {/* left */}
          <div>
            <div className="mb-5 mt-10">
          <p className="text-[#b99658] uppercase tracking-[8px] text-sm mb-5">
            About Us
          </p>

          <h2 className="font-heading text-[52px] leading-none">
            Crafting Spaces
          </h2>

          <h3 className="font-heading italic text-[#b99658] text-[48px]">
            Beyond Utility
          </h3>
        </div>

            <div className="border-l-2 border-[#b99658] pl-8 mt-5">

              <h4 className="font-heading text-5xl mb-8">
                Luxury Begins
                <br />
                With Detail
              </h4>

              <p className="text-zinc-600 text-lg leading-9">
                Every fixture we create blends
                engineering precision with
                timeless aesthetics, transforming
                everyday rituals into experiences.
              </p>
            </div>

            <div className="mt-5">
              <p className="text-[#b99658] text-6xl font-heading">
                25+
              </p>

              <p className="uppercase tracking-[4px] text-sm mt-2">
                Years Of Excellence
              </p>
            </div>
          </div>

          {/* image */}
          <div className="relative group">

            <div className="overflow-hidden rounded-[40px]">

              <Image
                src="/home/about-section.png"
                width={900}
                height={1000}
                alt="About"
                className="
                  h-[700px]
                  w-full
                  object-cover rounded-t-full
                "
              />
            </div>

            {/* floating card */}
            <div className="
              absolute
              -bottom-10
              left-1/2
              -translate-x-1/2
              bg-white
              shadow-2xl
              px-10
              py-6
              rounded-2xl
            ">
              <p className="text-[#b99658] uppercase tracking-[4px] text-xs">
                Premium Bathroom Solutions
              </p>

              <h4 className="font-heading text-3xl mt-2">
                Crafted To Inspire
              </h4>
            </div>
          </div>

          {/* right */}
          <div className="space-y-12 flex flex-col justify-end">

            <div>
              <p className="text-[#b99658] text-5xl font-heading">
                500+
              </p>

              <p className="text-zinc-600 mt-2">
                Premium Products
              </p>
            </div>

            <div>
              <p className="text-[#b99658] text-5xl font-heading">
                100K+
              </p>

              <p className="text-zinc-600 mt-2">
                Happy Customers
              </p>
            </div>

            <div>
              <p className="text-[#b99658] text-5xl font-heading">
                50+
              </p>

              <p className="text-zinc-600 mt-2">
                Design Collections
              </p>
            </div>

            <Link
              href="/about"
              className="
                inline-flex
                items-center
                gap-4
                border
                border-[#b99658]
                px-8
                py-4
                uppercase
                tracking-[3px]
                text-[#b99658]
                hover:bg-[#b99658]
                hover:text-white
                transition
              "
            >
              Discover Our Story →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}