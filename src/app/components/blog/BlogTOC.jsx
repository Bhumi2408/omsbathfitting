"use client";

import { useEffect, useState } from "react";

// Sticky "In this article" list that highlights the section in view.
export default function BlogTOC({ headings }) {
  const [activeId, setActiveId] = useState(headings[0]?.id);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -65% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav aria-label="Table of contents">
      <p className="text-[#b99658] uppercase tracking-[4px] text-xs mb-5">
        In This Article
      </p>
      <ul className="border-l border-zinc-200">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block -ml-px border-l-2 pl-4 py-2 text-sm leading-5 transition-colors ${
                  isActive
                    ? "border-[#b99658] text-black font-medium"
                    : "border-transparent text-zinc-500 hover:text-black"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
