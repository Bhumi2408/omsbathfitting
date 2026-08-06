import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#f8f6f2] py-14 sm:py-20 overflow-hidden px-0" id="about">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10">

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr_0.7fr] gap-10 sm:gap-14">

          {/* left */}
          <div>
            <div className="mb-5 mt-6 sm:mt-10">
              <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-4 sm:mb-5">
                About Us
              </p>

              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[52px] leading-none">
                Crafting Spaces
              </h2>

              <h3 className="font-heading italic text-[#b99658] text-3xl sm:text-4xl lg:text-[48px]">
                Beyond Utility
              </h3>
            </div>

            <div className="border-l-2 border-[#b99658] pl-5 sm:pl-8 mt-5">

              <h4 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-5 sm:mb-8">
                Precision Meets
                <br />
                Timeless Design
              </h4>

              <p className="text-zinc-600 text-base sm:text-lg leading-7 sm:leading-9">
                OM&apos;s Bath is a trusted{" "}
                <Link
                  href="/#contact"
                  className="font-semibold text-[#b99658] hover:underline"
                >
                  CP Bath Fitting Manufacturer in Delhi
                </Link>
                , blending precision craftsmanship, state-of-the-art
                technology and top-grade raw materials to bring superior
                performance and aesthetic excellence to everyday bathing
                experiences. As an{" "}
                <strong className="font-semibold text-zinc-800">
                  ISO 9001:2015 certified
                </strong>{" "}
                manufacturer with{" "}
                <strong className="font-semibold text-zinc-800">
                  20+ years of experience
                </strong>
                , we manufacture Chrome Plated (CP) bathroom fittings from our
                own facility in Mangol Puri, New Delhi, supplying dealers,
                builders, and homeowners across Delhi NCR and India.
              </p>
            </div>

            <div className="mt-8 sm:mt-5">
              <p className="text-[#b99658] text-5xl sm:text-6xl font-heading">
                2 Decades
              </p>

              <p className="uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm mt-2">
                Of Trust &amp; Quality
              </p>
            </div>
          </div>

          {/* image */}
          <div className="relative group">

            <div className="overflow-hidden rounded-[24px] sm:rounded-[40px]">
              <Image
                src="/home/about-section.png"
                width={900}
                height={1000}
                alt="OM's Bath - CP Bath Fitting Manufacturer in Delhi"
                className="
                  h-[420px]
                  sm:h-[560px]
                  lg:h-[700px]
                  w-full
                  object-cover
                  rounded-t-full
                "
              />
            </div>

            {/* floating card */}
            <div className="
              absolute
              -bottom-8
              sm:-bottom-10
              left-1/2
              -translate-x-1/2
              bg-white
              shadow-2xl
              px-6
              py-4
              sm:px-10
              sm:py-6
              rounded-xl
              sm:rounded-2xl
              w-[85%]
              sm:w-auto
              text-center
              sm:text-left
            ">
              <p className="text-[#b99658] uppercase tracking-[2px] sm:tracking-[4px] text-[10px] sm:text-xs">
                An ISO 9001:2015 Certified Company
              </p>

              <h4 className="font-heading text-xl sm:text-3xl mt-1 sm:mt-2">
                Crafted To Impress
              </h4>
            </div>
          </div>

          {/* right */}
          <div className="space-y-8 sm:space-y-12 flex flex-col justify-end mt-10 lg:mt-0">

            <div>
              <p className="text-[#b99658] text-4xl sm:text-5xl font-heading">
                20+
              </p>

              <p className="text-zinc-600 mt-2 text-sm sm:text-base">
                Design Collections
              </p>
            </div>

            <div>
              <p className="text-[#b99658] text-4xl sm:text-5xl font-heading">
                500+
              </p>

              <p className="text-zinc-600 mt-2 text-sm sm:text-base">
                Premium Products
              </p>
            </div>

            <div>
              <p className="text-[#b99658] text-4xl sm:text-5xl font-heading">
                ISO 9001:2015
              </p>

              <p className="text-zinc-600 mt-2 text-sm sm:text-base">
                Certified Manufacturing
              </p>
            </div>

          </div>

        </div>

        {/* SEO internal link strip */}
        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-zinc-600 text-sm sm:text-base">
            Looking for a reliable{" "}
            <Link
              href="/#contact"
              className="font-semibold text-[#b99658] hover:underline"
            >
              CP Bath Fitting Manufacturer in Delhi
            </Link>
            ? Explore our full range for dealers, builders, and homeowners
            across Delhi NCR.
          </p>
        </div>

      </div>
    </section>
  );
}