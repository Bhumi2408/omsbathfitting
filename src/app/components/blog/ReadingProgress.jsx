"use client";

import { useEffect, useState } from "react";

// Thin gold bar under the sticky header that fills as the reader scrolls.
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed top-[70px] lg:top-[80px] left-0 right-0 z-40 h-[3px] bg-transparent">
      <div
        className="h-full bg-[#b99658] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
