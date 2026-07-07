import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const collections = [
  {
    image: "/home/qubas.png",
    products: "24 Products",
    title: "Quba Series",
    link: "/quba",
  },
  {
    image: "/home/faucet.png",
    products: "18 Products",
    title: "Health Faucets Series",
    link: "/health-faucets",
  },
  {
    image: "/home/opals.png",
    products: "31 Products",
    title: "Opal Series",
    link: "/opal",
  },
  
];

const page = () => {
    return (
        <>
            <section className="relative h-screen overflow-hidden">
                <Image
                    src="/home/shower.png"
                    fill
                    priority
                    alt="shower"
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
                            Collections
                        </h1>

                       
                            <p
                                className="
                      text-[#c8a86b]
                      text-3xl
                      italic
                      font-heading
                      mb-8
                    "
                            >
                                Crafted for timeless luxury
                            </p>
                     

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
                            Discover Royal premium bathroom fittings.
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

             <section className="bg-[#f8f6f2] py-20" id="#collections">
      <div className="max-w-[1700px] mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-14">
       

          <h2
            className="
        font-heading
        text-[#b99658]
        text-[60px]
        leading-none
        mb-3
      "
          >
            OUR COLLECTIONS
          </h2>

          <p
            className="
        text-zinc-500
        max-w-2xl
        mx-auto
        text-lg
      "
          >
            Discover our curated collections, designed for timeless luxury
            interiors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-7 px-10">
          {collections.map((item) => (
            <Link key={item.title} href={item.link} className="group">
              <div
                className="
            relative
            overflow-hidden
            rounded-[32px]
            h-[480px]
          "
              >
                {/* image */}
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="
                object-cover
                object-center
                transition
                duration-700
                group-hover:scale-110
              "
                />

                {/* overlay */}
                <div
                  className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/20
              to-black/10
              transition
              duration-500
              group-hover:from-black/95
            "
                />

                {/* product count */}
                <div
                  className="
              absolute
              top-6
              left-6
              px-4
              py-2
              rounded-full
              backdrop-blur-xl
              bg-white/10
              border
              border-white/20
            "
                >
                  <p
                    className="
                text-white
                uppercase
                tracking-[3px]
                text-xs
              "
                  >
                    {item.products}
                  </p>
                </div>

                {/* content */}
                <div
                  className="
              absolute
              bottom-0
              left-0
              right-0
              p-8
            "
                >
                  <p
                    className="
                text-[#b99658]
                uppercase
                tracking-[4px]
                text-xs
                mb-3
              "
                  >
                    {item.subtitle}
                  </p>

                  <div
                    className="
                flex
                justify-between
                items-end
              "
                  >
                    <h3
                      className="
                  font-heading
                  text-white
                  text-3xl
                "
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-white/20
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  text-white
                  transition
                  duration-300
                  group-hover:bg-[#b99658]
                  group-hover:border-[#b99658]
                "
                    >
                      →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
        </>
    )
}

export default page