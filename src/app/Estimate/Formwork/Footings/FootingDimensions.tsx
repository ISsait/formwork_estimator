"use client";

import React from "react";
import FootingConcrete from "../../Concrete/FootingConcrete";
import FootingFormwork from "./FootingFormwork";

export default function FootingDimensions({
  footingDimensions,
  setFootingDimensions,
}: {
  footingDimensions: { width: string; length: string; depth: string };
  setFootingDimensions: React.Dispatch<
    React.SetStateAction<{ width: string; length: string; depth: string }>
  >;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center p-4 sm:p-8 pb-20 text-sm/6 text-center sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <label
            htmlFor="footingWidth"
            className="block text-sm font-medium pt-2"
          >
            Footing Width (m)
          </label>
          <input
            type="number"
            id="footingWidth"
            name="footingWidth"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter width"
            value={footingDimensions.width}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFootingDimensions({
                ...footingDimensions,
                width: e.target.value,
              })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <label
            htmlFor="footingLength"
            className="block text-sm font-medium pt-2"
          >
            Footing Length (m)
          </label>
          <input
            type="number"
            id="footingLength"
            name="footingLength"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter length"
            value={footingDimensions.length}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFootingDimensions({
                ...footingDimensions,
                length: e.target.value,
              })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <label
            htmlFor="footingDepth"
            className="block text-sm font-medium pt-2"
          >
            Footing Depth (m)
          </label>
          <input
            type="number"
            id="footingDepth"
            name="footingDepth"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter depth"
            value={footingDimensions.depth}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFootingDimensions({
                ...footingDimensions,
                depth: e.target.value,
              })
            }
          />
        </div>
        {footingDimensions.width &&
          footingDimensions.length &&
          footingDimensions.depth && (
            <FootingConcrete
              footingWidth={footingDimensions.width}
              footingLength={footingDimensions.length}
              footingDepth={footingDimensions.depth}
            />
          )}
      </div>

      <div className="w-full max-w-2xl">
        {footingDimensions.width &&
        footingDimensions.length &&
        footingDimensions.depth ? (
          <FootingFormwork
            footingWidth={footingDimensions.width}
            footingLength={footingDimensions.length}
            footingDepth={footingDimensions.depth}
          />
        ) : (
          <div className="text-sm text-gray-500">
            <p>
              Please enter the footing dimensions to see the material
              estimation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
