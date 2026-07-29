"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const DropdownSlider = ({ items }) => (
  <div
    className="
      absolute
      top-full
      left-1/2
      -translate-x-1/2
      pt-6
      sm:pt-8
      z-50
      w-[92vw]
      max-w-[900px]
    "
  >
    <div
      className="
        w-full
        bg-[#121212]
        border
        border-[#2a2a2a]
        shadow-2xl
        px-4
        sm:px-8
        pb-3
        pt-5
        sm:pt-6
      "
    >
      <Swiper
        slidesPerView={1.4}
        slidesPerGroup={1}
        spaceBetween={16}
        loop={true}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3, slidesPerGroup: 2, spaceBetween: 30 },
        }}
        modules={[Pagination, Autoplay]}
        className="collection-slider"
      >
        {items.map((item) => (
          <SwiperSlide key={item.name}>
            <Link href={item.link} className="group">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  width={350}
                  height={230}
                  alt={item.name}
                  className="
                    h-[130px]
                    sm:h-[160px]
                    lg:h-[180px]
                    w-full
                    object-cover
                    transition
                    duration-500
                    rounded-xl
                    group-hover:scale-110
                  "
                />
              </div>

              <h3 className="text-white text-base sm:text-lg lg:text-xl mt-3 sm:mt-4">
                {item.name}
              </h3>

              <p className="text-[#b99658] mt-1 sm:mt-2 text-sm">
                View Collection →
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

const collections = [
  { name: "Quba", image: "/home/qubas.png", link: "/quba" },
  { name: "Aria", image: "/home/aria.png", link: "/aria" },
  {
    name: "Essential Item",
    image: "/home/essential-item.png",
    link: "/essential-item",
  },
  { name: "Cute", image: "/home/cute.png", link: "/cute" },
  { name: "Quadra", image: "/home/quadra.png", link: "/quadra" },
  { name: "Opal", image: "/home/opals.png", link: "/opal" },
  {
    name: "Concealed Body",
    image: "/home/concealed-body.png",
    link: "/concealed-body",
  },
  {
    name: "Health Faucets",
    image: "/home/faucet.png",
    link: "/health-faucets",
  },
  { name: "Phonex", image: "/home/phonex.png", link: "/phonex" },
  { name: "Mini Opal", image: "/home/mini-opal.png", link: "/mini-opal" },
  { name: "Spark", image: "/home/spark.png", link: "/spark" },
  { name: "Fly", image: "/home/fly.png", link: "/fly" },
  { name: "Cosmos", image: "/home/cosmos.png", link: "/cosmos" },
  { name: "Curve", image: "/home/curve.png", link: "/curve" },
  { name: "Donald", image: "/home/curve.png", link: "/donald" },
  { name: "Bonjo", image: "/home/curve.png", link: "/bonjo" },
  { name: "Royal", image: "/home/curve.png", link: "/royal" },
  { name: "Neo", image: "/home/neoss.png", link: "/neo" },
  { name: "Bath Set", image: "/home/curve.png", link: "/bath-set" },
  { name: "Shower", image: "/home/curve.png", link: "/showers" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCollectionOpen, setMobileCollectionOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10 pointer-events-none"></div>

      <nav className="relative border-b border-[#252525]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-20">
          <div className="h-[70px] lg:h-[80px] flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                width={80}
                height={56}
                alt="Logo"
                priority
                className="w-[70px] sm:w-[90px] lg:w-[100px] h-auto"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">
              <Link
                className="text-[13px] uppercase tracking-[3px] text-black font-medium hover:text-[#b99658] duration-300"
                href="/"
              >
                Home
              </Link>

              <Link
                className="text-[13px] uppercase tracking-[3px] text-black font-medium hover:text-[#b99658] duration-300"
                href="#about"
              >
                About
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("collection")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/collections">
                  <button className="text-[13px] uppercase tracking-[3px] text-black cursor-pointer font-medium hover:text-[#b99658]">
                    Collection
                  </button>
                </Link>

                {activeDropdown === "collection" && (
                  <DropdownSlider items={collections} />
                )}
              </div>

              <Link
                className="text-[13px] uppercase tracking-[3px] text-black font-medium hover:text-[#b99658] duration-300"
                href="#testimonials"
              >
                Testimonials
              </Link>

              <Link
                className="text-[13px] uppercase tracking-[3px] text-black font-medium hover:text-[#b99658] duration-300"
                href="#contact"
              >
                Contact
              </Link>

              <Link
                className="text-[13px] uppercase tracking-[3px] text-black hover:text-white px-4 py-3 bg-[#b99658] duration-300"
                href="#contact"
              >
                Download Catalogue
              </Link>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-black p-2"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SLIDE-OUT MENU */}
      <div
        className={`
          fixed inset-0 z-[60] lg:hidden
          transition-opacity duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => {
            setMobileOpen(false);
            setMobileCollectionOpen(false);
          }}
        />

        {/* panel */}
        <div
          className={`
            absolute top-0 right-0 h-full w-[82%] max-w-[360px]
            bg-white
            shadow-2xl
            transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
            overflow-y-auto
          `}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-200">
            <Image src="/logo.png" width={70} height={45} alt="Logo" />
            <button
              onClick={() => {
                setMobileOpen(false);
                setMobileCollectionOpen(false);
              }}
              aria-label="Close menu"
            >
              <X size={26} className="text-black" />
            </button>
          </div>

          <div className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="
                  text-[14px]
                  uppercase
                  tracking-[2px]
                  text-black
                  font-medium
                  py-4
                  border-b
                  border-zinc-100
                  hover:text-[#b99658]
                  duration-300
                "
              >
                {link.label}
              </Link>
            ))}

            {/* Collection - expandable */}
            <div className="border-b border-zinc-100">
              <button
                onClick={() => setMobileCollectionOpen((prev) => !prev)}
                className="
                  flex
                  items-center
                  justify-between
                  w-full
                  text-[14px]
                  uppercase
                  tracking-[2px]
                  text-black
                  font-medium
                  py-4
                  hover:text-[#b99658]
                  duration-300
                "
              >
                Collection
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    mobileCollectionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ease-in-out
                  ${mobileCollectionOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}
                `}
              >
                <div className="overflow-hidden">
                  <Link
                    href="/collections"
                    onClick={() => setMobileOpen(false)}
                    className="block text-xs uppercase tracking-[2px] text-[#b99658] mb-3 font-medium"
                  >
                    View All Collections →
                  </Link>

                  <div className="grid grid-cols-2 gap-4">
                    {collections.map((item) => (
                      <Link
                        key={item.name}
                        href={item.link}
                        onClick={() => setMobileOpen(false)}
                        className="group"
                      >
                        <div className="overflow-hidden rounded-lg">
                          <Image
                            src={item.image}
                            width={160}
                            height={110}
                            alt={item.name}
                            loading="eager"
                            sizes="(max-width: 640px) 45vw, 160px"
                            className="h-[70px] w-full object-cover rounded-lg transition duration-300 group-hover:scale-105"
                          />
                        </div>
                        <p className="text-black text-xs mt-1.5">{item.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="
                text-[13px]
                uppercase
                tracking-[3px]
                text-center
                text-black
                hover:text-white
                px-4
                py-4
                mt-6
                bg-[#b99658]
                duration-300
              "
            >
              Download Catalogue
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
