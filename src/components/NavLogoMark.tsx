"use client";

import Image from "next/image";
import { useState } from "react";

const LOGO_SOURCES = [
  "/WINDOW_WORKS_RESIDENTIAL_TRANSPARENT.png",
  "/logo.png",
  "/logo.jpg",
  // Spaces must be encoded for reliable loading in production
  "/WINDOW%20WORKS%20RESIDENTIAL.jpg",
] as const;

export function NavLogoMark() {
  const [index, setIndex] = useState(0);
  const failed = index >= LOGO_SOURCES.length;

  if (failed) {
    return (
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border-2 border-[#3d95d4]/60 bg-[#0d1f2d]">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#3d95d4" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={LOGO_SOURCES[index]}
      alt="WindowWorks Residential"
      width={220}
      height={64}
      className="h-16 w-auto max-w-[220px] shrink-0 object-contain object-left"
      priority
      onError={() => setIndex((i) => i + 1)}
    />
  );
}
