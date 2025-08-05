"use client";

import React from "react";
import { useState } from "react";
import WallConcrete from "../../Concrete/WallConcrete";
import WallFormwork from "./WallFormwork";

export default function WallDimensions(): React.JSX.Element {
  const [wallHeight, setWallHeight] = useState("");
  const [wallLength, setWallLength] = useState("");
  const [wallThickness, setWallThickness] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center p-4 sm:p-8 pb-20 text-sm/6 text-center sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <div className="w-full max-w-2xl">
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
            value={wallHeight}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWallHeight(e.target.value)
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
            value={wallLength}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWallLength(e.target.value)
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
            value={wallThickness}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWallThickness(e.target.value)
            }
          />
        </div>
        {wallHeight && wallLength && wallThickness && (
          <WallConcrete
              wallHeight={wallHeight}
              wallLength={wallLength}
              wallThickness={wallThickness}
            />
          )
        }
      </div>

      <div className="w-full max-w-2xl">
        {wallHeight && wallLength && wallThickness ? (
          <WallFormwork
            wallHeight={wallHeight}
            wallLength={wallLength}
            wallThickness={wallThickness}
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
