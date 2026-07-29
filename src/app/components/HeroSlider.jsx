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
      "Premium bath faucets and mixers, precision-engineered with chrome finishes for lasting performance.",
    link: "/collections",
  },
  {
    image: "/home/banner2.png",
    title1: "TIMELESS",
    title2: "BATHROOMS",
    subtitle:
      "From bath sets to rain showers — coordinated accessories for a complete luxury bathroom.",
    link: "/bath-set",
  },
  {
    image: "/home/banner3.png",
    title1: "MODERN",
    title2: "CRAFTSMANSHIP",
    subtitle:
      "Overhead and hand showers engineered for a refined, everyday showering experience.",
    link: "/showers",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-[520px] sm:h-[600px] lg:h-[650px] overflow-hidden">
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
            <div className="relative h-[520px] sm:h-[600px] lg:h-[650px]">
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
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1600px] mx-auto w-full px-6 sm:px-12 lg:px-24">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="text-[#b99658] tracking-[3px] sm:tracking-[8px] uppercase text-xs sm:text-sm mb-3 sm:mb-5">
                      Premium Bathroom Solutions
                    </p>

                    <h1 className="font-heading text-white text-3xl sm:text-5xl lg:text-6xl leading-none">
                      {slide.title1}
                    </h1>

                    <h2 className="font-heading italic text-[#b99658] text-4xl sm:text-6xl lg:text-7xl leading-none">
                      {slide.title2}
                    </h2>

                    <div className="w-14 sm:w-20 h-[1px] bg-[#b99658] my-4 sm:my-5" />

                    <p className="text-white/90 text-sm sm:text-lg lg:text-xl max-w-xl leading-6 sm:leading-8 lg:leading-9 mb-6 sm:mb-8">
                      {slide.subtitle}
                    </p>

                    <Link
                      href={slide.link}
                      className="
                        inline-flex
                        items-center
                        gap-3
                        sm:gap-4
                        border
                        border-[#b99658]
                        px-5
                        py-3.5
                        sm:px-7
                        sm:py-5
                        text-[#b99658]
                        uppercase
                        tracking-[2px]
                        sm:tracking-[3px]
                        text-xs
                        sm:text-sm
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