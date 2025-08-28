"use client";

import React from "react";

type FootingFormworkProps = {
  footingWidth: string;
  footingLength: string;
  footingDepth: string;
};

export default function FootingFormwork(
  props: FootingFormworkProps
): React.JSX.Element {
  const { footingWidth, footingLength, footingDepth } = props;

  const dimLumber = (footingDepth: string) => {
    const inches = parseFloat(footingDepth) / 0.0254;
    switch (true) {
      case inches < 6:
        return "2x4x6";
      case inches < 8:
        return "2x6x8";
      case inches < 10:
        return "2x8x10";
      case inches < 12:
        return "2x8x12";
      default:
        return "Unknown size possibly need to use plywood";
    }
  }

  return (
    <div className="flex flex-col text-sm/6 sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <div className="grid grid-cols-[4fr_1fr] gap-8 mt-2 text-sm">
        <strong>&#8226; Dimension lumber required:</strong>
        <span className="text-right">{dimLumber(footingDepth)}</span>
      </div>
    </div>
  );
}
