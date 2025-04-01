import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCloudDownload } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Contact() {
    return (
        <div className="container">
            <div className='sm:py-[60px] py-[40px] px-[30px] bg-black border border-[#B83CFF] sm:rounded-[20px] rounded-[12px] relative z-10 lg:w-[90%] mx-auto mt-[50px] box-shadow'>
                <h3 data-text="Contact" className="md:text-[48px] sm:text-[32px] text-[26px] font-semibold text-[#B83CFF] text-center mb-[50px] reflection relative">
                    Contact <span className='text-[#ffffff]'>Me</span>
                </h3>

                <div className='contact-form flex items-center justify-center w-full'>
                    <div className='flex items-center justify-center flex-wrap gap-[30px] w-full'>
                        <a href="tel:+918401111886" className='conact-card'><div className='contact-list-icon !text-[26px]'><FaPhoneAlt /></div><p className='sm:text-[18px] text-[16px] font-medium sm:leading-[32px] leading-[26px] text-center card-text transition-all duration-300 ease-in-out min-h-[50px]'>+91 8401111886</p></a>
                        <a href="mailto:jayti0747@gmail.com" className='conact-card'><div className='contact-list-icon'><MdEmail /></div><p className='sm:text-[18px] text-[16px] font-medium sm:leading-[32px] leading-[26px] text-center card-text transition-all duration-300 ease-in-out min-h-[50px]'>jayti0747@gmail.com</p></a>
                        <a href="" className='conact-card'><div className='contact-list-icon'><FaSquareUpwork /></div><p className='sm:text-[18px] text-[16px] font-medium sm:leading-[32px] leading-[26px] text-center card-text transition-all duration-300 ease-in-out min-h-[50px]'>UP Work</p></a>
                        <a href="" className='conact-card'><div className='contact-list-icon'><TbBrandGithubFilled /></div><p className='sm:text-[18px] text-[16px] font-medium sm:leading-[32px] leading-[26px] text-center card-text transition-all duration-300 ease-in-out min-h-[50px]'>Git Hub</p></a>
                        <a href="/cv.pdf" download className='conact-card'><div className='contact-list-icon'><IoIosCloudDownload /></div><p className='sm:text-[18px] text-[16px] font-medium sm:leading-[32px] leading-[26px] text-center card-text transition-all duration-300 ease-in-out min-h-[50px]'>Download C.V</p></a>
                        <div className='conact-card'><div className='contact-list-icon'><FaLocationDot /></div><p className='sm:text-[18px] text-[16px] font-medium sm:leading-[32px] leading-[26px] text-center card-text transition-all duration-300 ease-in-out min-h-[50px]'>Ahmedabad ,Gujarat India</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
