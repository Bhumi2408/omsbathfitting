"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function FloatingWhatsApp() {
  const phoneNumber = "918860349883"; // country code + number, no + or spaces
  const message = "Hi, I'm interested in OM's Bath Fittings products.";

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        sm:bottom-8
        sm:right-8
        z-[100]
        w-14
        h-14
        sm:w-16
        sm:h-16
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-[0_8px_24px_rgba(37,211,102,0.4)]
        hover:scale-110
        active:scale-95
        transition-transform
        duration-300
      "
    >
      {/* pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      <FontAwesomeIcon
        icon={faWhatsapp}
        className="relative text-3xl text-white"
      />
    </Link>
  );
}