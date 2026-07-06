import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    image: "/home/quba.png",
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
    image: "/home/opal.png",
    products: "31 Products",
    title: "Opal Series",
    link: "/opal",
  },
  
];

export default function SignatureSeries() {
  return (
    <section className="bg-[#f8f6f2] py-20" id="#collections">
      <div className="max-w-[1700px] mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="
        text-[#b99658]
        uppercase
        tracking-[8px]
        text-sm
        mb-3
      "
          >
            OUR COLLECTIONS
          </p>

          <h2
            className="
        font-heading
        text-[62px]
        leading-none
        mb-3
      "
          >
            Signature Series
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
  );
}
