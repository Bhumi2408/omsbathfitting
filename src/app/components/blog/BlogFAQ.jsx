"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function BlogFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group"
            >
              <h3 className="font-heading text-lg sm:text-[22px] text-black group-hover:text-[#9a7a3f] transition-colors">
                <strong className="font-semibold">
                  {index + 1}. {item.q}
                </strong>
              </h3>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#b99658] border-[#b99658] text-black rotate-45"
                    : "border-zinc-300 text-[#b99658]"
                }`}
              >
                <Plus size={18} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-zinc-600 text-base sm:text-[17px] leading-7 sm:leading-8 pb-6 pr-12">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
