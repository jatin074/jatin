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
                <h3 data-text="work" className="md:text-[48px] sm:text-[32px] text-[26px] font-semibold text-white mb-[20px] text-center reflection relative">
                    Recent work
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
                            <Image width={800} height={500} src="/images/work/item1.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/item2.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/item3.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/item4.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/item5.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/item6.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center w-full slide-items">
                            <Image width={800} height={500} src="/images/work/item7.png" alt="Slide 1" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

        </div>
    )
}
