"use client";

import React from "react";
import { useState } from "react";
import WallDimensions from "./Formwork/Walls/WallDimensions";
import ChevronButton from "@/Components/ChevronButton";

export default function EstimatePage(): React.JSX.Element {
  const [projectName, setProjectName] = useState("");
  const [formworkTypes, setFormworkTypes] = useState({
    slabFormwork: false,
    footingFormwork: false,
    wallFormwork: false,
  });

  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 text-sm/6 text-center sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <ul className="list-inside list-disc">
        <li className="mb-2 tracking-[-.01em]">
          Welcome to the Estimator page!
        </li>
        <li className="tracking-[-.01em]">
          Here you can calculate the materials you need for your formwork
          projects.
        </li>
      </ul>
      <div className="mt-8 ml-8 grid grid-cols-1 w-full max-w-4xl">
        <div className="mb-4">
          <label
            htmlFor="projectName"
            className="block text-sm font-medium mb-2"
          >
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter project name"
            value={projectName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setProjectName(event.target.value);
            }}
          />
        </div>
        <div className="mt-8">
          <label className="block text-sm font-medium mb-4">
            Formwork Types
          </label>

          <div className="rounded-xl border border-gray-200 shadow-lg p-4 mb-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                setFormworkTypes({
                  ...formworkTypes,
                  wallFormwork: !formworkTypes.wallFormwork,
                })
              }
            >
              <ChevronButton isOpen={formworkTypes.wallFormwork} />
              <span className="text-base font-semibold text-white dark:text-gray-300">
                Wall Formwork
              </span>
            </div>

            {/* Content: Conditionally Rendered Formwork Details */}
            {formworkTypes.wallFormwork && (
              <div>
                <WallDimensions />
              </div>
            )}
          </div>

          <div className="rounded-xl border border-gray-200 shadow-lg p-4 mb-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                setFormworkTypes({
                  ...formworkTypes,
                  footingFormwork: !formworkTypes.footingFormwork,
                })
              }
            >
              <ChevronButton isOpen={formworkTypes.footingFormwork} />
              <span className="text-base font-semibold text-white dark:text-gray-300">
                Footing Formwork
              </span>
            </div>

            {/* Content: Conditionally Rendered Formwork Details */}
            {formworkTypes.footingFormwork && (
              <div>{/*<FootingDimensions />*/}</div>
            )}
          </div>
          <div className="rounded-xl border border-gray-200 shadow-lg p-4 mb-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                setFormworkTypes({
                  ...formworkTypes,
                  slabFormwork: !formworkTypes.slabFormwork,
                })
              }
            >
              <ChevronButton isOpen={formworkTypes.slabFormwork} />
              <span className="text-base font-semibold text-white dark:text-gray-300">
                Slab Formwork
              </span>
            </div>

            {/* Content: Conditionally Rendered Formwork Details */}
            {formworkTypes.slabFormwork && (
              <div>{/* <SlabDimensions /> */}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
