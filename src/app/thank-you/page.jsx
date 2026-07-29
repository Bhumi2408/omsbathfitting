import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You | OM's Bath Fittings",
  description: "Thank you for reaching out to OM's Bath Fittings.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 sm:px-10">
      <div className="max-w-[700px] mx-auto text-center py-20 sm:py-24">

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#b99658]/40 bg-[#b99658]/10 flex items-center justify-center">
            <CheckCircle2 size={36} strokeWidth={1.5} className="text-[#b99658]" />
          </div>
        </div>

        <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-4 sm:mb-6">
          Message Sent
        </p>

        <h1 className="font-heading text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.05] mb-4 sm:mb-6">
          Thank You For
          <span className="block italic text-[#b99658]">
            Reaching Out
          </span>
        </h1>

        <div className="w-16 sm:w-24 h-[1px] bg-[#b99658] mx-auto mb-6 sm:mb-8" />

        <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 max-w-xl mx-auto mb-10 sm:mb-12">
          Our specialists have received your enquiry and will get back
          to you shortly to discuss your project.
        </p>

        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-3
            sm:gap-4
            border
            border-[#b99658]
            px-6
            py-3.5
            sm:px-10
            sm:py-5
            text-[#b99658]
            uppercase
            tracking-[2px]
            sm:tracking-[4px]
            text-xs
            sm:text-sm
            hover:bg-[#b99658]
            hover:text-black
            transition-all
            duration-300
          "
        >
          Back To Home →
        </Link>

      </div>
    </section>
  );
}