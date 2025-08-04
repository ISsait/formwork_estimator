"use client";

import React from "react";
import { useState } from "react";

type WallConcreteProps = {
  wallHeight: string;
  wallLength: string;
  wallThickness: string;
};

export default function WallConcrete(
  props: WallConcreteProps
): React.JSX.Element {
  const { wallHeight, wallLength, wallThickness } = props;
  const [wallConcrete, setWallConcrete] = useState(true);

  // Calculate the volume of concrete needed for the wall
  const volume =
    parseFloat(wallHeight) * parseFloat(wallLength) * parseFloat(wallThickness);

  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 text-sm/6 text-center sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="wallConcrete"
          name="wallConcrete"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          checked={wallConcrete}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setWallConcrete(event.target.checked);
          }}
        />
        <label
          htmlFor="wallConcrete"
          className="ml-3 text-base font-semibold text-white dark:text-gray-300"
        >
          Wall Concrete
        </label>
      </div>
      {wallConcrete && (
        <div className="w-full max-w-2xl mt-4">
          <p className="font-semibold">
            Concrete Volume Required: {volume.toFixed(2)} m³
          </p>
        </div>
      )}
    </div>
  );
}
