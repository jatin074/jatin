"use client";
import Image from 'next/image'
import React from 'react'

export default function Herosection() {
  return (
    <div className='sm:pt-[226px] pt-[120px] overflow-hidden'>
      <div className="container">
        <div>
          <div className='flex flex-wrap justify-between lg:gap-[50px] gap-0 border border-[#B83CFF] sm:rounded-[20px] rounded-[12px] bg-[#000000] w-full relative z-10 hero-section'>
            <div className='sm:pl-[50px] sm:py-[50px] pl-[30px] pt-[20px] pb-[26px]'>
              <h2 className='sm:text-[64px] text-[40px] font-bold text-white mb-2'>Hi! I’m<span className='ml-[10px] text-[#B83CFF]'>Jay</span></h2>
              <h3 className='text-[14px] font-semibold mr-1 text-[#B83CFF] leading-[14px]'>Creative</h3>


              <div className='text-animation mb-[50px] mt-[8px]'>
                <h3 id="resizing-h3">
                  <span>
                    <div className="stage">
                      <div className="cubespinner">
                        <div className="face1">Website Designer</div>
                        <div className="face2">Frontend Developer</div>
                        <div className="face3">UI/UX Designer</div>
                        <div className="face4">App Designer</div>
                      </div>
                    </div>
                  </span>
                </h3>
              </div>
              <p className='text-[16px] font-normal text-white sm:mt-[70px] mt-[54px]'>&quot;Life is too short for bad UX&quot;</p>

              <a href="#" className="button rounded-[5px] py-[8px] px-[26px] text-white text-[16px] font-medium my-[10px] w-fit">Hire Me!</a>
            </div>
            <div className='mb-[1px] mt-[-70px] lg:w-auto w-full flex lg:justify-end justify-center'>
              <Image src='/images/hero.svg' alt='hero img' width={450} height={450} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
