import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import React from "react";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-700">
    <section className="bg-grid">
        <MaxWidthWrapper className = 
        'pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-left lg:text-left flex flex-col items-start lg:items-start">
              <div className="absolute w-38 left-0 -top-20 hidden lg:block">
                <img src="/icon-1.png" className="w-full"/>
              </div>
              <h1 className="relative w-fit tracking-tight text text-balance mt-16 font-bald !leading-tight text-gray-900 text-5xl md:text-6xl ld:text-7xl  ">
                Portfolio
              </h1>

              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                i'm a <span className="font-semibold">reaaaally</span> good devloper frfr 
                i can make a lot of stuff.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-purple-500"/>
                    i'm a first-year student
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-purple-500"/>
                    in Grenoble UGA
                  </li>
                </div>
              </ul>

              <div className="mt-8 space-y-2 text-left font-medium flex flex-col itmes-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    PLACE HOLDER, PLACE HOLDER
                  </li>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
} 