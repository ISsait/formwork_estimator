"use client";

import React from "react";
import { useState } from "react";
import Plus from "../Components/Plus";
import ChevronButton from "@/app/Components/ChevronButton";
import WallDimensions from "@/app/Estimate/Formwork/Walls/WallDimensions";

export type Wall = {
  height: string,
  length: string,
  thickness: string,
  label: string,
  id: string
}

type Footing = {
  width: string,
  length: string,
  depth: string,
  followWallDimensions: string | null,
  id: string
}

export default function EstimatePage(): React.JSX.Element {
  const [projectName, setProjectName] = useState("");

  const [formworkTypes, setFormworkTypes] = useState({
    slabFormwork: false,
    footingFormwork: false,
    wallFormwork: false,
  });

  const [wallDimensions, setWallDimensions] = useState<Wall>({
    height: "",
    length: "",
    thickness: "",
    label: "",
    id: Date.now().toString(),
  });

  const [walls, setWalls] = useState<Wall[]>([wallDimensions]);

  const [footings, setFootings] = useState<Footing[]>([]);

  // const [footingDimensions, setFootingDimensions] = useState({
  //   projection: "0",
  //   width: "",
  //   length: "",
  //   depth: "",
  //   followWallDimensions: false,
  // });

  // useEffect(() => {
  //   if (footingDimensions.followWallDimensions) {
  //     const projection = parseFloat(footingDimensions.projection);
  //     const thickness = parseFloat(wallDimensions.thickness);

  //     if (!isNaN(projection) && !isNaN(thickness)) {
  //       const widthAndProjection = (projection * 2 + thickness)
  //         .toPrecision(3)
  //         .toString();

  //       setFootingDimensions({
  //         ...footingDimensions,
  //         width: widthAndProjection,
  //         length: wallDimensions.length,
  //       });
  //     } else {
  //       console.warn("Invalid projection or thickness:", projection, thickness);
  //       setFootingDimensions({
  //         ...footingDimensions,
  //         width: "",
  //         length: "",
  //         projection: "0",
  //       });
  //     }
  //   }

  //   if (!footingDimensions.followWallDimensions) {
  //     setFootingDimensions({
  //       ...footingDimensions,
  //       width: "",
  //       length: "",
  //     });
  //   }
  // }, [
  //   wallDimensions,
  //   footingDimensions.followWallDimensions,
  //   footingDimensions.projection,
  // ]);

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
            <div className="flex flex-col-2 justify-between">
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
            <div className="flex items-center cursor-pointer"
              onClick={() => {
                const newWall: Wall = {
                  height: "",
                  length: "",
                  thickness: "",
                  label: "",
                  id: Date.now().toString(),
                };
                setWalls((prevWalls) => [...prevWalls, newWall]);
              }}
            >
              <Plus />
              <span className="ml-2 text-sm text-gray-500">Add Wall Section</span>
            </div>
          </div>

            {/* Content: Conditionally Rendered Formwork Details */}
            {formworkTypes.wallFormwork && (
              <div>
                {walls.map((wall) => (
                  <WallDimensions
                    key={wall.id}
                    wallDimensions={wall}
                    setWallDimensions={(updatedWall: Wall) => {
                      setWalls((prevWalls) =>
                        prevWalls.map((w) => (w.id === updatedWall.id ? updatedWall : w))
                      );
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
