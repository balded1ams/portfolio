import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import React from "react";
import { Box, Check,Star } from "lucide-react";
import Phone from "@/components/Phone";
import PixelBox from "@/components/PixelBox";

export default function Home() {
  return (
    <div className='bg-[#e4e6d8] grainy-light'>
      <section className="bg-grid">
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2   px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <img src='icon-1.png' className='w-full' />
              </div>
              <PixelBox Title={
                <h1 className='relative w-fit tracking-tight text-balance m-3 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                  {' '}
                  <span className='bg-[#191a1c] px-2 text-[#e4e6d8]'>portfolio</span>{' '}
                </h1>
              } className={"bg-[#e4e6d8]"}>
                
                <p className='-mt-8 text-lg lg:pr-10 max-w-prose text-left lg:text-left text-balance md:text-wrap'>
                  placeholder for my presentation
                </p>

                <ul className=' space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                  <div className='space-y-2'>
                    <li className='flex gap-1.5 items-center text-left'>
                      <Check className='h-5 w-5 shrink-0 text-[#191a1c]' />
                      change the wierd icon, 
                    </li>
                    <li className='flex gap-1.5 items-center text-left'>
                      <Check className='h-5 w-5 shrink-0 text-[#191a1c]' />
                      i keep it in case of 
                    </li>
                    <li className='flex gap-1.5 items-center text-left'>
                      <Check className='h-5 w-5 shrink-0 text-[#191a1c]' />
                      i need to make some kind of preset
                    </li>
                  </div>
              </ul>
              </PixelBox>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-[#e4e6d8]'
                    src='icon-2.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-[#e4e6d8]'
                    src='icon-2.png'
                    alt='user image'
                  />
                  {/* if the image doesn't look right, can use "object-cover to make it apear more natural"*/}
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-[#e4e6d8]'
                    src='icon-2.png'
                    alt='user image'
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className='h-4 w-4 text-[#191a1c] fill-[#191a1c]'/>
                    <Star className='h-4 w-4 text-[#191a1c] fill-[#191a1c]'/>
                    <Star className='h-4 w-4 text-[#191a1c] fill-[#191a1c]'/>
                    <Star className='h-4 w-4 text-[#191a1c] fill-[#191a1c]'/>
                    <Star className='h-4 w-4 text-[#191a1c] fill-[#191a1c]'/>
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
    
          <PixelBox Title={<h1 className="text-lg font-bold ">Mon Titre</h1>} className="bg-[#e4e6d8] ">
            <div>
              <img src="/icon-1.png" className="h-64" />
            </div>
          </PixelBox>
        </MaxWidthWrapper>
      </section>
    </div>
  )
} 