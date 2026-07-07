"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
      pt-8
      z-50
    "
  >
    <div
      className="
        w-[900px]
        bg-[#121212]
        border
        border-[#2a2a2a]
        shadow-2xl
        px-8
        pb-3
        pt-6
      "
    >
      <Swiper
        slidesPerView={3}
        slidesPerGroup={2}
        spaceBetween={30}
        loop={true}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, // sirf kuch dots dikhengi
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
                    h-[180px]
                    w-full
                    object-cover
                    transition
                    duration-500
                    rounded-xl
                    group-hover:scale-110
                  "
                />
              </div>

              <h3 className="text-white text-xl mt-4">{item.name}</h3>

              <p className="text-[#b99658] mt-2">View Collection →</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

const collections = [
  {
    name: "Essential Item",
    image: "/home/essential-item.png",
    link: "/essential-item",
  },
  {
    name: "Cute",
    image: "/home/cute.png",
    link: "/cute",
  },
  {
    name: "Quba",
    image: "/home/qubas.png",
    link: "/quba",
  },
  {
    name: "Quadra",
    image: "/home/quadra.png",
    link: "/quadra",
  },
  {
    name: "Opal",
    image: "/home/opals.png",
    link: "/opal",
  },
  {
    name: "Aria",
    image: "/home/aria.png",
    link: "/aria",
  },
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
  {
    name: "Phonex",
    image: "/home/phonex.png",
    link: "/phonex",
  },
  {
    name: "Mini Opal",
    image: "/home/mini-opal.png",
    link: "/mini-opal",
  },
  {
    name: "Spark",
    image: "/home/spark.png",
    link: "/spark",
  },
  {
    name: "Fly",
    image: "/home/fly.png",
    link: "/fly",
  },
  {
    name: "Cosmos",
    image: "/home/cosmos.png",
    link: "/cosmos",
  },
  {
    name: "Curve",
    image: "/home/curve.png",
    link: "/curve",
  },
  { name: "Donald", image: "/home/curve.png", link: "/donald" },
  { name: "Bonjo", image: "/home/curve.png", link: "/bonjo" },
  { name: "Royal", image: "/home/curve.png", link: "/royal" },
  { name: "Neo", image: "/home/neoss.png", link: "/neo" },
  { name: "Bath Set", image: "/home/curve.png", link: "/bath-set" },
  { name: "Shower", image: "/home/curve.png", link: "/shower" },
];

const bathSetItems = [
  {
    name: "Dolfee",
    image: "/home/dolfee.png",
    link: "/bath-set/dolfee",
  },
  {
    name: "Squaro",
    image: "/home/squaro.png",
    link: "/bath-set/squaro",
  },
  {
    name: "Ridim",
    image: "/home/ridim.png",
    link: "/bath-set/ridim",
  },
];

const showerItems = [
  {
    name: "Rain Shower",
    image: "/home/rain-shower.png",
    link: "/showers/rain",
  },
  {
    name: "Telephonic Shower",
    image: "/home/telephonic-shower.png",
    link: "/showers/telephonic",
  },
  {
    name: "Overhead Shower",
    image: "/home/overhead-shower.png",
    link: "/showers/overhead",
  },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* top overlay */}
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10"></div>

      <nav className="relative border-b border-[#252525]">
        <div className="max-w-[1800px] mx-auto px-20">
          <div className="h-[80px] flex items-center justify-between">
            {/* LEFT MENU */}
            {/* <div className="flex items-center gap-10">
           

              <Link
                href="/#about"
                className="
      text-[13px]
      uppercase
      tracking-[3px]
      text-[#cfcfcf]
      hover:text-[#b99658]
    "
              >
                About
              </Link>

              <Link
                href="/#testimonials"
                className="
      text-[13px]
      uppercase
      tracking-[3px]
      text-[#cfcfcf]
      hover:text-[#b99658]
    "
              >
                Testimonials
              </Link>

              <Link
                href="/royal"
                className="
      text-[13px]
      uppercase
      tracking-[3px]
      text-[#cfcfcf]
      hover:text-[#b99658]
    "
              >
                Royal
              </Link>

          
              <Link
                href="/neo"
                className="
      text-[13px]
      uppercase
      tracking-[3px]
      text-[#cfcfcf]
      hover:text-[#b99658]
    "
              >
                Neo
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("bathset")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="
        text-[13px]
        uppercase
        tracking-[3px]
        text-[#cfcfcf]
        hover:text-[#b99658]
      "
                >
                  Bath Set
                </button>

                {activeDropdown === "bathset" && (
                  <DropdownSlider items={bathSetItems} />
                )}
              </div>
            </div> */}

            {/* LOGO */}
            <Link href="/">
              <Image
                src="/logo.png"
                width={100}
                height={70}
                alt="Logo"
                priority
              />
            </Link>

            {/* RIGHT MENU */}
            <div className="flex items-center gap-10">
              {/* <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("shower")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="
      text-[13px]
      uppercase
      tracking-[3px]
      text-[#cfcfcf]
      hover:text-[#b99658]
    "
                >
                  Shower
                </button>

                {activeDropdown === "shower" && (
                  <DropdownSlider items={showerItems} />
                )}
              </div> */}
              <Link
                className="
      text-[13px]
      uppercase
      tracking-[3px]
      text-black
      font-medium
      hover:text-[#b99658]
      duration-300"
                href="/"
              >
                Home
              </Link>

              <Link
                className="
      text-[13px]
      uppercase
      tracking-[3px]
     text-black
      font-medium
      hover:text-[#b99658]
      duration-300"
                href="#about"
              >
                About
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("collection")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/collections"><button
                  className="
      text-[13px]
      uppercase
      tracking-[3px]
       text-black
       cursor-pointer
      font-medium
      hover:text-[#b99658]
    "
                >
                  Collection
                </button></Link>

                {activeDropdown === "collection" && (
                  <DropdownSlider items={collections} />
                )}
              </div>
              <Link
                className="
      text-[13px]
      uppercase
      tracking-[3px]
       text-black
      font-medium
      hover:text-[#b99658]
      duration-300"
                href="#testimonials"
              >
                Testimonials
              </Link>
              <Link
                className="
      text-[13px]
      uppercase
      tracking-[3px]
       text-black
      font-medium
      hover:text-[#b99658]
      duration-300"
                href="#contact"
              >
                Contact
              </Link>

              <Link
                className="
      text-[13px]
      uppercase
      tracking-[3px]
      text-black
      hover:text-white px-4 py-3 bg-[#b99658]
      duration-300"
                href="#contact"
              >
                Download Catalogue
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
