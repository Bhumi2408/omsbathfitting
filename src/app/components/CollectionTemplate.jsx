import Image from "next/image";
import Link from "next/link";

export default function CollectionTemplate({
  collection,
}) {
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

        {/* overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1700px] mx-auto w-full px-12">
            <p
              className="
                text-[#b99658]
                uppercase
                tracking-[8px]
                text-sm
                mb-6
              "
            >
              Premium Collection
            </p>

            <h1
              className="
                font-heading
                text-white
                text-[110px]
                leading-[0.9]
                mb-6
              "
            >
              {collection.name}
            </h1>

            {collection.tagline && (
              <p
                className="
                  text-[#c8a86b]
                  text-3xl
                  italic
                  font-heading
                  mb-8
                "
              >
                {collection.tagline}
              </p>
            )}

            <div className="w-24 h-[1px] bg-[#b99658] mb-8" />

            <p
              className="
                text-zinc-300
                text-xl
                leading-10
                max-w-2xl
                mb-10
              "
            >
              {collection.description}
            </p>

            <button
              className="
                border
                border-[#b99658]
                px-10
                py-5
                text-[#b99658]
                uppercase
                tracking-[4px]
                hover:bg-[#b99658]
                hover:text-black
                duration-300
              "
            >
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* PREMIUM RANGE */}
      <section className="bg-[#faf8f5] py-20">
        <div className="max-w-[1700px] mx-auto px-10">
          <div className="text-center mb-10">
            <p
              className="
                text-[#b99658]
                uppercase
                tracking-[6px]
                mb-4
              "
            >
              Collection Range
            </p>

            <h2
              className="
                font-heading
                text-6xl
                mb-6
              "
            >
              Explore Our Premium Range
            </h2>

            <div className="w-40 h-[1px] bg-[#d9c7a0] mx-auto" />
          </div>

          <div
            className="
              grid
              lg:grid-cols-4
              md:grid-cols-2
              gap-8
            "
          >
            {collection.products?.map((product) => (
              <div
                key={product.name}
                className="
                  bg-white
                  border
                  border-[#ece7dc]
                  overflow-hidden
                  rounded-xl
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  group
                "
              >
                <div
                  className="
                    h-[240px]
                    bg-[#f8f6f2]
                    overflow-hidden
                  "
                >
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.name}
                    className="
                      h-full
                      w-full
                      object-contain
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="p-7">
                  <h3
                    className="
                      font-heading
                      text-3xl
                      mb-3
                    "
                  >
                    {product.name}
                  </h3>

                  {product.price && (
                    <p
                      className="
                        text-[#b99658]
                        text-xl
                        mb-4
                      "
                    >
                      {product.price}
                    </p>
                  )}

                  <p
                    className="
                      text-zinc-500
                      leading-7
                      mb-6
                    "
                  >
                    {product.description}
                  </p>

                  <Link href="/#contact">
                    <button
                      className="
                        text-[#b99658]
                        uppercase
                        tracking-[3px]
                        text-sm
                        hover:tracking-[4px]
                        duration-300
                      "
                    >
                      Enquire Now →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24">
        <div className="max-w-[1700px] mx-auto px-10">
          <div
            className="
              border
              border-[#3a2f1a]
              py-14
              px-16
              flex
              flex-col
              lg:flex-row
              justify-between
              items-center
              gap-10
            "
          >
            <div>
              <p
                className="
                  text-[#b99658]
                  uppercase
                  tracking-[4px]
                  mb-4
                "
              >
                Need Expert Advice?
              </p>

              <h2
                className="
                  font-heading
                  text-white
                  text-5xl
                  mb-4
                "
              >
                We Are Here To Help
              </h2>

              <p className="text-zinc-400">
                Connect with our specialists for personalized solutions.
              </p>
            </div>

            <Link href="/#contact">
              <button
                className="
                  bg-[#b99658]
                  px-12
                  py-5
                  uppercase
                  tracking-[4px]
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