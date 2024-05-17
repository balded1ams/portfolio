import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import React from "react";
import { Box, Check,Star } from "lucide-react";
import Phone from "@/components/Phone";
import PixelBox from "@/components/PixelBox";

export default function Home() {
  return (
    <div className='bg-slate-50 grainy-light'>
      <section className="bg-grid">
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <img src='icon-1.png' className='w-full' />
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                {' '}
                <span className='bg-violet-500 px-2 text-white'>portfolio</span>{' '}

              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                placeholder for my presentation
              </p>

              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-violet-600' />
                    change the wierd icon, 
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-violet-600' />
                    i keep it in case of 
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-violet-600' />
                    i need to make some kind of preset
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='icon-2.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='icon-2.png'
                    alt='user image'
                  />
                  {/* if the image doesn't look right, can use "object-cover to make it apear more natural"*/}
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='icon-2.png'
                    alt='user image'
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className='h-4 w-4 text-violet-500 fill-violet-500'/>
                    <Star className='h-4 w-4 text-violet-500 fill-violet-500'/>
                    <Star className='h-4 w-4 text-violet-500 fill-violet-500'/>
                    <Star className='h-4 w-4 text-violet-500 fill-violet-500'/>
                    <Star className='h-4 w-4 text-violet-500 fill-violet-500'/>
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg-mt-20 h-fit'>
            <div className="relative m:max-w-xl">
              <img src="/icon-1.png" className="absolute w-40 md:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" />
              <img src="/line.png" className="abbsolute w-20 -left-6 -bottom-6" />
              <Phone className="w-64" imgSrc = "/icon-1.png"/>
            </div>
          </div>

          <PixelBox Title="oui" >
            <div>
              <p>kljfhd</p>
            </div>
          </PixelBox>
        </MaxWidthWrapper>
      </section>
    </div>
  )
} 