"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/home/banner1.png",
    title1: "ELEVATE EVERYDAY",
    title2: "WITH ELEGANCE",
    subtitle:
      "Crafted with precision. Designed for perfection. Redefining luxury in every detail.",
    link: "/products/faucets",
  },
  {
    image: "/home/banner2.png",
    title1: "TIMELESS",
    title2: "BATHROOMS",
    subtitle: "Premium bathroom fittings engineered for luxury interiors.",
    link: "/products/accessories",
  },
  {
    image: "/home/banner3.png",
    title1: "MODERN",
    title2: "CRAFTSMANSHIP",
    subtitle: "Discover contemporary designs with superior quality.",
    link: "/products/showers",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-[650px] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[650px]">
              {/* Background */}
              <Image
                src={slide.image}
                alt=""
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1600px] mx-auto w-full px-24">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p
                      className="
          text-[#b99658]
          tracking-[8px]
          uppercase
          text-sm
          mb-5
        "
                    >
                      Premium Bathroom Solutions
                    </p>

                    <h1
                      className="
          font-heading
          text-white
          text-6xl
          leading-none
        "
                    >
                      {slide.title1}
                    </h1>

                    <h2
                      className="
          font-heading italic
          text-[#b99658]
          text-7xl
          leading-none
        "
                    >
                      {slide.title2}
                    </h2>

                    <div
                      className="
          w-20
          h-[1px]
          bg-[#b99658]
          my-5
        "
                    />

                    <p
                      className="
          text-white/90
          text-xl
          max-w-xl
          leading-9
          mb-8
        "
                    >
                      {slide.subtitle}
                    </p>

                    <Link
                      href={slide.link}
                      className="
          inline-flex
          items-center
          gap-4
          border
          border-[#b99658]
          px-7
          py-5
          text-[#b99658]
          uppercase
          tracking-[3px]
          hover:bg-[#b99658]
          hover:text-black
          transition-all
          duration-500
        "
                    >
                      Explore Collection →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
