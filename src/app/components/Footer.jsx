import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "../data/businessdata";

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* subtle background watermark */}
      <span
        className="
          absolute
          -bottom-16
          -right-6
          sm:-right-10
          font-heading
          text-[140px]
          sm:text-[220px]
          lg:text-[300px]
          leading-none
          text-white/[0.02]
          select-none
          pointer-events-none
        "
      >
        OM
      </span>

      <div className="relative max-w-[1700px] mx-auto px-6 sm:px-10 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
        {/* TOP CTA STRIP */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            items-start
            lg:items-end
            gap-8
            lg:gap-10
            border-b
            border-[#2a2a2a]
            pb-12
            sm:pb-14
            lg:pb-16
            mb-12
            sm:mb-16
          "
        >
          <div>
            <p className="text-[#b99658] uppercase tracking-[3px] sm:tracking-[6px] text-xs sm:text-sm mb-4 sm:mb-6">
              Let's Create Together
            </p>
            <h2 className="font-heading text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-2xl mb-5 sm:mb-6">
              Crafted To Impress,
              <br />
              <span className="italic text-[#b99658]">Built To Last.</span>
            </h2>

            <p className="text-zinc-500 text-sm sm:text-base leading-6 sm:leading-7 max-w-xl">
              Looking for a reliable{" "}
              <strong className="font-semibold text-white">
                {BUSINESS.legalCategory} in {BUSINESS.city}
              </strong>
              ? Contact {BUSINESS.name} today for the best prices, dealer
              inquiries, or bulk orders. As a trusted{" "}
              <strong className="font-semibold text-white">
                {BUSINESS.legalCategory}
              </strong>
              , the team responds quickly and guides buyers through every
              step — whether it's a bulk order, a dealership application, or
              a simple product query.
            </p>
          </div>

          <Link
            href="/#contact"
            className="
              group
              shrink-0
              inline-flex
              items-center
              gap-3
              sm:gap-4
              border
              border-[#b99658]
              px-6
              py-3.5
              sm:px-8
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
              duration-300
            "
          >
            Get In Touch
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-10 sm:gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-8">
            <Image
              src="/logo.png"
              alt="OM's Bath Fittings"
              width={100}
              height={50}
              className="mb-5 sm:mb-6"
            />

            <p className="text-zinc-500 text-sm sm:text-base leading-6 sm:leading-7 max-w-sm mb-6 sm:mb-8">
              An ISO 9001:2015 certified manufacturer of premium bathroom
              fittings — precision-engineered for timeless interiors and modern
              luxury living.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/Omsbathfitting"
                aria-label="Facebook"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#2a2a2a]
                  flex
                  items-center
                  justify-center
                  text-zinc-500
                  hover:text-[#b99658]
                  hover:border-[#b99658]
                  transition
                  duration-300
                "
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/omsbathfitting/"
                aria-label="Instagram"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#2a2a2a]
                  flex
                  items-center
                  justify-center
                  text-zinc-500
                  hover:text-[#b99658]
                  hover:border-[#b99658]
                  transition
                  duration-300
                "
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.youtube.com/@omsbathfitting"
                aria-label="YouTube"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#2a2a2a]
                  flex
                  items-center
                  justify-center
                  text-zinc-500
                  hover:text-[#b99658]
                  hover:border-[#b99658]
                  transition
                  duration-300
                "
              >
                <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-[#b99658] font-heading text-sm">01</span>
              <div className="w-6 h-[1px] bg-[#b99658]" />
              <h4 className="text-white uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">
                Collections
              </h4>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                href="/royal"
                className="text-zinc-500 hover:text-[#b99658] transition text-sm sm:text-base w-fit"
              >
                Royal
              </Link>
              <Link
                href="/neo"
                className="text-zinc-500 hover:text-[#b99658] transition text-sm sm:text-base w-fit"
              >
                Neo
              </Link>
              <Link
                href="/bonjo"
                className="text-zinc-500 hover:text-[#b99658] transition text-sm sm:text-base w-fit"
              >
                Bonjo
              </Link>
              <Link
                href="/donald"
                className="text-zinc-500 hover:text-[#b99658] transition text-sm sm:text-base w-fit"
              >
                Donald
              </Link>
              <Link
                href="/collections"
                className="text-[#b99658] hover:text-white transition text-sm sm:text-base w-fit mt-1"
              >
                View All →
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-[#b99658] font-heading text-sm">02</span>
              <div className="w-6 h-[1px] bg-[#b99658]" />
              <h4 className="text-white uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">
                Company
              </h4>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                href="/#about"
                className="text-zinc-500 hover:text-[#b99658] transition text-sm sm:text-base w-fit"
              >
                About Us
              </Link>
              <Link
                href="/#testimonials"
                className="text-zinc-500 hover:text-[#b99658] transition text-sm sm:text-base w-fit"
              >
                Testimonials
              </Link>
              <Link
                href="/collections"
                className="text-zinc-500 hover:text-[#b99658] transition text-sm sm:text-base w-fit"
              >
                Collections
              </Link>
              <Link
                href="/#contact"
                className="text-zinc-500 hover:text-[#b99658] transition text-sm sm:text-base w-fit"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-[#b99658] font-heading text-sm">03</span>
              <div className="w-6 h-[1px] bg-[#b99658]" />
              <h4 className="text-white uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">
                Contact
              </h4>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#b99658] mt-0.5 shrink-0"
                />
                <p className="text-zinc-500 text-sm sm:text-base">
                  G-3/17, Mangol Puri, Industrial Plot,
                  <br />
                  New Delhi - 110083
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#b99658] mt-0.5 shrink-0"
                />
                <p className="text-zinc-500 text-sm sm:text-base break-all">
                  omsbath@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#b99658] mt-0.5 shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919811612238"
                    className="text-zinc-500 text-sm sm:text-base hover:text-[#b99658] transition"
                  >
                    +91 98116 12238
                  </a>
                  <a
                    href="tel:+919999110648"
                    className="text-zinc-500 text-sm sm:text-base hover:text-[#b99658] transition"
                  >
                    +91 99991 10648
                  </a>
                  <a
                    href="tel:+918860349883"
                    className="text-zinc-500 text-sm sm:text-base hover:text-[#b99658] transition"
                  >
                    +91 88603 49883
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#1a1a1a] mt-14 sm:mt-16 lg:mt-20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-zinc-600 text-xs sm:text-sm">
              © 2026 OM'S Bath Fittings. All rights reserved.
            </p>

            <p className="text-zinc-600 text-xs sm:text-sm">
              Powered by{" "}
              <Link
                href="https://www.cybertricksmedia.com/"
                className="text-zinc-500 hover:text-[#b99658] transition"
              >
                Cybertricks Media Pvt Ltd.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}