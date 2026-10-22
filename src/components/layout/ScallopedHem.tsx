import React from "react";

export function ScallopedHem() {
  return (
    <svg
      className="tp-header__hem"
      aria-hidden="true"
      width="100%"
      height="14"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="tp-hem"
          width="44"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0H44V2A22 11 0 0 1 0 2Z"
            fill="var(--color-milk)"
            stroke="rgba(42, 23, 14, 0.08)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="14" fill="url(#tp-hem)" />
    </svg>
  );
}
