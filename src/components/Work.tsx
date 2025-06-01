"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Work() {

    return (
        <div className='pt-[70px] sm:py-[100px]'>
            <div className="container">
                <h3 data-text="work" className="md:text-[48px] sm:text-[32px] text-[26px] font-semibold text-white mb-[20px] pt-[12px] sm:pt-0 text-center reflection relative">
                    Recent <span className='text-theme'>work</span>
                </h3>
            </div>

            <section className="lg:mt-[140px] mt-[80px]">
                <Swiper
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={50}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={false}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                        991: { slidesPerView: 2.5 },
                        1200: { slidesPerView: 3 }
                    }}
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/work1.jpg" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/work2.jpg" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/work3.jpg" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/work4.jpg" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/work5.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/work6.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/work7.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/work8.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

        </div>
    )
}
