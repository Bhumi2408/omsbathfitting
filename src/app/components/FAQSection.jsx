"use client";

import { useState } from "react";
import Script from "next/script";
import { FAQS, BUSINESS } from "../data/businessdata";

// FAQPage schema is built by mapping over the same FAQS array that
// renders the accordion below — one array, two outputs, always in sync.
function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BUSINESS.pageUrl}#faq`,
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const schema = buildFaqSchema();

  return (
    <section className="bg-white py-14 sm:py-20 px-6 sm:px-10" id="faq">
      <Script
        id="oms-bath-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-[900px] mx-auto">
        <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-4 sm:mb-5 text-center">
          FAQs
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] mb-10 sm:mb-14 text-center">
          Frequently Asked{" "}
          <span className="text-[#b99658] italic">Questions</span>
        </h2>

        <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left"
                >
                  <span className="font-heading text-lg sm:text-xl">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-2xl text-[#b99658] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <p className="text-zinc-600 text-sm sm:text-base leading-6 sm:leading-7 pb-5 sm:pb-6 pr-8">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}