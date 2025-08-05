"use client";

import React from "react";

type WallConcreteProps = {
  wallHeight: string;
  wallLength: string;
  wallThickness: string;
};

export default function WallConcrete(
  props: WallConcreteProps
): React.JSX.Element {
  const { wallHeight, wallLength, wallThickness } = props;

  // Calculate the volume of concrete needed for the wall
  const volume =
    parseFloat(wallHeight) * parseFloat(wallLength) * parseFloat(wallThickness);

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
