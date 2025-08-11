"use client";

import React from "react";

type FootingConcreteProps = {
  footingWidth: string;
  footingLength: string;
  footingDepth: string;
};

export default function FootingConcrete(
  props: FootingConcreteProps
): React.JSX.Element {
  const { footingWidth, footingLength, footingDepth } = props;

  // Calculate the volume of concrete needed for the footing
  const volume =
    parseFloat(footingWidth) * parseFloat(footingLength) * parseFloat(footingDepth);

  return (
    <div className="flex flex-col text-sm/6 sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <div className="w-full mt-4">
        <p className="font-semibold">
          Concrete Volume Required: {volume.toFixed(2)} m³
        </p>
      </div>
    </div>
  );
}
