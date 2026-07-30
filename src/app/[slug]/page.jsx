import Image from "next/image";
import { notFound } from "next/navigation";
import { collections } from "../data/collections";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) return { title: "Not Found" };
  return {
    title: collection.seo.title,
    description: collection.seo.description,
    keywords: collection.seo.keywords,
  };
}

export async function generateStaticParams() {
  return collections.map((item) => ({ slug: item.slug }));
}

export default async function CollectionPage({ params }) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src={collection.banner}
          fill
          priority
          alt={collection.name}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1700px] mx-auto w-full px-6 sm:px-10 lg:px-12">
            <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-4 sm:mb-6">
              Premium Collection
            </p>

            <h1 className="font-heading text-white text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.95] lg:leading-[0.9] mb-4 sm:mb-6">
              {collection.name}
            </h1>

            <p className="text-[#c8a86b] text-lg sm:text-2xl lg:text-3xl italic font-heading mb-6 sm:mb-8">
              {collection.tagline}
            </p>

            <div className="w-16 sm:w-24 h-[1px] bg-[#b99658] mb-6 sm:mb-8" />

            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-7 sm:leading-9 lg:leading-10 max-w-2xl mb-8 sm:mb-10">
              {collection.description}
            </p>

            <Link
              href="#collection"
              className="inline-block border border-[#b99658] px-6 py-3 sm:px-10 sm:py-5 text-[#b99658] uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm hover:bg-[#b99658] hover:text-black duration-300"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* PREMIUM RANGE */}
      <section className="bg-[#faf8f5] py-14 sm:py-20 lg:py-24" id="collection">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10">
          {/* heading */}
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <p className="text-[#b99658] uppercase tracking-[3px] sm:tracking-[6px] mb-3 sm:mb-4 text-xs sm:text-sm">
              Collection Range
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Explore Our Premium Range
            </h2>
            <div className="w-24 sm:w-40 h-[1px] bg-[#d9c7a0] mx-auto" />
          </div>

          {/* products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {collection.products.map((product, index) => (
              <div key={product.name} className="group relative">
                {/* faded background serial number */}
                <span
                  className="
                    absolute
                    -top-6
                    sm:-top-10
                    -left-1
                    sm:-left-2
                    font-heading
                    text-7xl
                    sm:text-8xl
                    lg:text-[110px]
                    leading-none
                    text-black/[0.05]
                    select-none
                    pointer-events-none
                    z-0
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="
                    relative
                    z-10
                    bg-white
                    border
                    border-[#e5ddc8]
                    transition
                    duration-500
                    group-hover:border-[#b99658]
                    group-hover:shadow-[0_25px_50px_-12px_rgba(185,150,88,0.25)]
                    overflow-hidden
                  "
                >
                  {/* image stage */}
                  <div className="p-4 sm:p-6 pb-0">
                    <div
                      className="
                        relative
                        h-[200px]
                        sm:h-[240px]
                        lg:h-[260px]
                        bg-white
                        border
                        border-[#e5ddc8]
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                      "
                    >
                      <Image
                        src={product.image}
                        width={280}
                        height={280}
                        alt={product.name}
                        className="
                          h-[160px]
                          sm:h-[190px]
                          lg:h-[200px]
                          w-auto
                          object-contain
                          transition
                          duration-700
                          group-hover:scale-110
                        "
                      />

                      {/* rotated price ribbon */}
                      {product.price && (
                        <div
                          className="
                            absolute
                            -right-9
                            sm:-right-11
                            top-4
                            sm:top-5
                            w-[120px]
                            sm:w-[150px]
                            rotate-45
                            bg-[#b99658]
                            text-white
                            text-[9px]
                            sm:text-[11px]
                            uppercase
                            tracking-[1px]
                            sm:tracking-[2px]
                            font-medium
                            text-center
                            py-1
                            shadow-md
                          "
                        >
                          {product.price}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* content */}
                  <div className="p-5 sm:p-7 pt-5 sm:pt-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span className="w-5 sm:w-6 h-[1px] bg-[#b99658]" />
                      <p className="text-[#b99658] text-[10px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px]">
                        Product {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <h3 className="font-heading text-black text-xl sm:text-2xl mb-3 sm:mb-4">
                      {product.name}
                    </h3>

                    {/* description - always visible on mobile/tablet, hover-reveal only on desktop */}
                    <p className="text-zinc-500 text-sm leading-6 mb-4 sm:mb-5 lg:hidden">
                      {product.description}
                    </p>

                    <div
                      className="
      hidden
      lg:grid
      grid-rows-[0fr]
      group-hover:grid-rows-[1fr]
      transition-all
      duration-500
      ease-in-out
    "
                    >
                      <div className="overflow-hidden">
                        <p className="text-zinc-500 text-sm leading-6 mb-5">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <button
                        className="
        flex
        items-center
        gap-2
        text-black
        uppercase
        tracking-[2px]
        text-xs
        font-medium
        group-hover:text-[#b99658]
        duration-300
      "
                      >
                        Enquire Now
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10">
          <div
            className="
              border
              border-[#3a2f1a]
              py-8
              px-6
              sm:py-14
              sm:px-16
              flex
              flex-col
              lg:flex-row
              justify-between
              items-center
              gap-6
              sm:gap-10
              text-center
              lg:text-left
            "
          >
            <div>
              <p className="text-[#b99658] uppercase tracking-[2px] sm:tracking-[4px] mb-3 sm:mb-4 text-xs sm:text-sm">
                Need Expert Advice?
              </p>
              <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                We Are Here To Help
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base">
                Connect with our specialists for personalized solutions.
              </p>
            </div>

            <Link href="/#contact">
              <button
                className="
                  bg-[#b99658]
                  px-8
                  py-4
                  sm:px-12
                  sm:py-5
                  uppercase
                  tracking-[2px]
                  sm:tracking-[4px]
                  text-xs
                  sm:text-sm
                  hover:bg-[#c8a86b]
                  duration-300
                "
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
