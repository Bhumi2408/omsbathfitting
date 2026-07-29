import Image from "next/image";
import Link from "next/link";

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

export default function SignatureSeries() {
  return (
    <section className="bg-[#f8f6f2] py-14 sm:py-20">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-3">
            Our Collections
          </p>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[62px] leading-none mb-3">
            Signature Series
          </h2>

          <p className="text-zinc-500 max-w-2xl mx-auto text-sm sm:text-lg">
            Discover our curated collections, designed for timeless luxury
            interiors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 px-0 sm:px-6 lg:px-10">
          {collections.map((item) => (
            <Link key={item.title} href={item.link} className="group">
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] h-[340px] sm:h-[420px] lg:h-[480px]">
                {/* image */}
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="object-cover object-center transition duration-700 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 transition duration-500 group-hover:from-black/95" />

                {/* product count */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20">
                  <p className="text-white uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-xs">
                    {item.products}
                  </p>
                </div>

                {/* content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <div className="flex justify-between items-end">
                    <h3 className="font-heading text-white text-xl sm:text-2xl lg:text-3xl">
                      {item.title}
                    </h3>

                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white text-sm sm:text-base transition duration-300 group-hover:bg-[#b99658] group-hover:border-[#b99658]">
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