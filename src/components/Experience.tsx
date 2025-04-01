import React from 'react'
import Image from 'next/image'

export default function Experience() {
    return (
        <div>
            <div className='relative z-10'>
                <div className="container">
                    <div>
                        <h3 data-text="Experience" className="md:text-[48px] sm:text-[32px] text-[26px] font-semibold text-[#ffffff] mb-[40px] text-center reflection relative">
                            My Education & Work Experience
                        </h3>
                    </div>
                    <div className='experience-content flex items-center justify-center flex-col sm:w-full w-[95%] mx-auto sm:mx-0 gap-[40px] sm:mt-[70px] mt-0'>
                        <div className='experience-card right p-[16px] rounded-[6px] w-full max-w-[450px] flex items-center gap-[20px] max-h-[100px]'>
                            <div className='flex items-center justify-center flex-col gap-2'>
                                <Image src="/images/experience/cap.svg" width={62} height={62} alt="icon" />
                                <p className='font-semibold text-white sm:text-[14px] text-[12px] whitespace-nowrap'>2018 - 2022</p>
                            </div>
                            <div className='sm:mx-0 mx-auto'>
                                <h3 className='font-medium text-white sm:text-[18px] text-[16px] text-center'>Apollo Institute of Engineering</h3>
                                <p className='font-medium text-[#DADADA] sm:text-[14px] text-[12px] text-center'>Bachelor’s Degree</p>
                            </div>
                        </div>
                        <div className='experience-card left p-[16px] rounded-[6px] w-full max-w-[450px] flex items-center gap-[20px] max-h-[100px]'>
                            <div className='flex items-center justify-center flex-col gap-2'>
                                <Image src="/images/experience/design.svg" width={40} height={36} alt="icon" />
                                <p className='font-semibold text-white sm:text-[14px] text-[12px] whitespace-nowrap'>2022 - 2023</p>
                            </div>
                            <div className='sm:ml-auto sm:mr-[106px] mx-auto'>
                                <h3 className='font-medium text-white sm:text-[18px] text-[16px] text-center'>Ui/Ux</h3>
                                <p className='font-medium text-[#DADADA] sm:text-[14px] text-[12px] text-center'>Certified ui/ux designer</p>
                            </div>
                        </div>
                        <div className='experience-card right p-[16px] rounded-[6px] w-full max-w-[450px] flex items-center gap-[20px] max-h-[100px]'>
                            <div className='flex items-center justify-center flex-col gap-2'>
                                <Image src="/images/experience/office.svg" width={50} height={50} alt="icon" />
                                <p className='font-semibold text-white sm:text-[14px] text-[12px] whitespace-nowrap'>2023 - 2025</p>
                            </div>
                            <div className='sm:ml-auto sm:mr-[128px] mx-auto'>
                                <h3 className='font-medium text-white sm:text-[18px] text-[16px] text-center'>CloseDigit LLP</h3>
                                <p className='font-medium text-[#DADADA] sm:text-[14px] text-[12px] text-center'>Frontend Engineer
                                </p>
                            </div>
                        </div>
                        <div className='experience-card p-[16px] rounded-[6px] w-full max-w-[450px] flex items-center gap-[20px] max-h-[100px]'>
                            <div className='flex items-center justify-center flex-col gap-2'>
                                <Image src="/images/experience/office.svg" width={50} height={50} alt="icon" />
                                <p className='font-semibold text-white sm:text-[14px] text-[12px] whitespace-nowrap'>2025</p>
                            </div>
                            <div className='sm:ml-auto sm:mr-[106px] mx-auto'>
                                <h3 className='font-medium text-white sm:text-[18px] text-[16px] text-center'>Self-Employed</h3>
                                <p className='font-medium text-[#DADADA] sm:text-[14px] text-[12px] text-center'>Web Designer & Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
