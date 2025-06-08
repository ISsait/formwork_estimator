"use client";

import React from "react";
import { useState } from "react";

export default function EstimatePage(): React.JSX.Element {
  const [projectName, setProjectName] = useState("");
  const [formworkTypes, setFormworkTypes] = useState({
    slabFormwork: false,
    footingFormwork: false,
    wallFormwork: false,
  });

  function handleSubmit() {
    console.log("Form submitted");
    const formData = {
      projectName: projectName,
      formworkTypes: formworkTypes,
    };
    console.log("Form Data:", formData);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 text-sm/6 text-center sm:text-left font-[family-name:var(--font-roboto-mono)]">
      <ul className="list-inside list-disc">
        <li className="mb-2 tracking-[-.01em]">
          Welcome to the Estimator page!
        </li>
        <li className="tracking-[-.01em]">
          Here you can calculate the materials you need for your formwork
          projects.
        </li>
      </ul>
      <form
        className="mt-8 ml-8 grid grid-cols-1 w-full max-w-2xl"
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
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
          <label className="block text-sm font-medium mb-2">
            Formwork Types
          </label>
          <div className="flex items-center m-4">
            <input
              type="checkbox"
              id="wallFormwork"
              name="wallFormwork"
              className="h-4 w-4"
              checked={formworkTypes.wallFormwork}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormworkTypes({
                  ...formworkTypes,
                  wallFormwork: event.target.checked,
                });
              }}
            />
            <label htmlFor="wallFormwork" className="ml-2 text-sm">
              Wall Formwork
            </label>
          </div>
          <div className="flex items-center m-4">
            <input
              type="checkbox"
              id="footingFormwork"
              name="footingFormwork"
              className="h-4 w-4"
              checked={formworkTypes.footingFormwork}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormworkTypes({
                  ...formworkTypes,
                  footingFormwork: event.target.checked,
                });
              }}
            />
            <label htmlFor="footingFormwork" className="ml-2 text-sm">
              Footing Formwork
            </label>
          </div>
          <div className="flex items-center m-4">
            <input
              type="checkbox"
              id="slabFormwork"
              name="slabFormwork"
              className="h-4 w-4"
              checked={formworkTypes.slabFormwork}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormworkTypes({
                  ...formworkTypes,
                  slabFormwork: event.target.checked,
                });
              }}
            />
            <label htmlFor="slabFormwork" className="ml-2 text-sm">
              Slab Formwork
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#999999] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto w-max-2xl mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
