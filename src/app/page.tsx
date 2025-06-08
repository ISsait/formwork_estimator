"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() : React.JSX.Element {

  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-roboto-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:place-items-start">
        <span className="grid grid-cols-[70px_1fr_70px] text-2xl sm:text-4xl font-bold tracking-tight text-left sm:text-left items-center gap-4">
          <Image
            src="/formwork_logo.svg"
            alt="Formwork logo"
            width={70}
            height={70}
            priority
          />
          <p className="flex items-center">Formwork Estimator</p>
        </span>

        <ul className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-roboto-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Welcome to the Formwork Estimator app!
          </li>
          <li className="tracking-[-.01em]">
            Quickly calculate the materials you need so you can focus on
            building your project.
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#999999] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            onClick={() => router.push("/Estimate")}
            type="button"
            rel="noopener noreferrer"
          >
            <Image
              src="/cube.svg"
              alt="Cube icon"
              width={20}
              height={20}
            />
            Start Estimating
          </button>
          <button
            className="rounded-md border border-solid border-black dark:border-white transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[250px]"
            onClick={() => router.push("/About")}
            type="button"
            rel="noopener noreferrer"
          >
            About Formwork Estimator
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ZoftLabs.com/formwork-estimator/examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ZoftLabs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to ZoftLabs.com →
        </a>
      </footer>
    </div>
  );
}
