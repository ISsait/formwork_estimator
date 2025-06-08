"use client";

import React from "react";

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20">
      <ul className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-roboto-mono)]">
        <li className="mb-2 tracking-[-.01em]">Welcome to the About page!</li>
        <li className="tracking-[-.01em]">
          This app was created to help you estimate the materials needed to
          build your formwork projects.
        </li>
      </ul>
    </div>
  );
}
