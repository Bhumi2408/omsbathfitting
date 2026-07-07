import Image from "next/image";
import Link from "next/link";

export default function NeoSection() {
  const features = [
    {
      title: "Single Lever",
      value: "Modern control",
    },
    {
      title: "Wall Mounted",
      value: "Minimal design",
    },
    {
      title: "Premium Finish",
      value: "PVD coating",
    },
    {
      title: "Soft Flow",
      value: "Luxury experience",
    },
  ];

  return (
    <section className="bg-[#f6f3ee]">
      <div className="grid lg:grid-cols-2 min-h-[700px]">

        {/* LEFT CONTENT */}
        <div className="flex items-center py-20">
          <div className="max-w-[600px] px-20">

            {/* heading */}
            <h2
              className="
                font-heading
                text-black
                text-[70px]
                leading-[0.95]
              "
            >
              Neo
            </h2>

            <h3
              className="
                font-heading
                italic
                text-black
                text-[55px]
                leading-none
                mb-8
              "
            >
              Collection
            </h3>

            {/* description */}
            <p
              className="
                text-zinc-600
                
                leading-[1.9]
                mb-10
              "
            >
              Crafted for contemporary interiors,
              the Neo Collection combines clean
              architectural lines with exceptional
              engineering. Designed to elevate
              everyday experiences through timeless
              luxury and precision.
            </p>

            {/* features */}
            <div className="space-y-6 mb-10">

              {features.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    justify-between
                    border-b
                    border-zinc-300
                    pb-3
                  "
                >
                  <span className="font-medium">
                    {item.title}
                  </span>

                  <span className="text-zinc-400 text-sm">
                    {item.value}
                  </span>
                </div>
              ))}

            </div>

            {/* button */}
            <Link
              href="/neo"
              className="
                inline-flex
                items-center
                gap-4
                uppercase
                tracking-[4px]
                text-[#b99658]
                border-b
                border-[#b99658]
                pb-3
                text-sm
                hover:gap-6
                transition-all
              "
            >
              Explore Neo Collection
              <span>→</span>
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative overflow-hidden group">

          <Image
            src="/home/neoss.png"
            alt="Neo Collection"
            fill
            className="
              object-cover
              transition
              duration-1000
              group-hover:scale-105
            "
          />

          {/* luxury overlay */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/10
            to-black/20
          " />

        </div>

      </div>
    </section>
  );
}