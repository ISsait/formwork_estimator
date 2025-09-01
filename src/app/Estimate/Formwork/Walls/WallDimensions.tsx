"use client";

import React from "react";
import WallConcrete from "../../Concrete/WallConcrete";
import WallFormwork from "./WallFormwork";
import type { Wall } from "@/app/Estimate/page";

export default function WallDimensions({
  wallDimensions,
  setWallDimensions,
}: {
  wallDimensions: Wall;
  setWallDimensions: (updatedWall: Wall) => void;
}): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center p-4 sm:p-8 pb-20 text-sm/6 text-center sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <div className="w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Wall ID: {wallDimensions.id}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <label
            htmlFor="wallHeight"
            className="block text-sm font-medium pt-2"
          >
            Wall Height (m)
          </label>
          <input
            type="number"
            id="wallHeight"
            name="wallHeight"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter height"
            value={wallDimensions.height}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWallDimensions({ ...wallDimensions, height: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <label
            htmlFor="wallLength"
            className="block text-sm font-medium pt-2"
          >
            Wall Length (m)
          </label>
          <input
            type="number"
            id="wallLength"
            name="wallLength"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter length"
            value={wallDimensions.length}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWallDimensions({ ...wallDimensions, length: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <label
            htmlFor="wallThickness"
            className="block text-sm font-medium pt-2"
          >
            Wall Thickness (m)
          </label>
          <input
            type="number"
            id="wallThickness"
            name="wallThickness"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter thickness"
            value={wallDimensions.thickness}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWallDimensions({
                ...wallDimensions,
                thickness: e.target.value,
              })
            }
          />
        </div>
        {wallDimensions.height &&
          wallDimensions.length &&
          wallDimensions.thickness && (
            <WallConcrete
              wallHeight={wallDimensions.height}
              wallLength={wallDimensions.length}
              wallThickness={wallDimensions.thickness}
            />
          )}
      </div>

      <div className="w-full max-w-2xl">
        {wallDimensions.height &&
        wallDimensions.length &&
        wallDimensions.thickness ? (
          <WallFormwork
            wallHeight={wallDimensions.height}
            wallLength={wallDimensions.length}
            wallThickness={wallDimensions.thickness}
          />
        ) : (
          <div className="text-sm text-gray-500">
            <p>
              Please enter the wall dimensions to see the material estimation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
