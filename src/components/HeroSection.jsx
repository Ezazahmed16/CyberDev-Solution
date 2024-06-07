import Link from 'next/link';
import React from 'react';
import { MdMiscellaneousServices } from "react-icons/md";

const HeroSection = () => {
    return (
        <div className="relative hero min-h-screen">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="https://videocdn.cdnpk.net/joy/content/video/free/video0485/large_preview/_import_61b593756995c2.98061119.mp4?filename=1118553_4k_form_graphic_3840x2160.mp4"
                type="video/mp4"
                autoPlay
                loop
                muted
            ></video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                    <h1 className='text-2xl md:text-4xl lg:text-5xl text-white'>
                        WE TAKE RESPONSIBILITY FOR, <br />
                        <span style={{ color: '#8C2E47' }}>YOUR BUSINESS AUTOMATION</span>
                    </h1>
                    <p className='text-sm mt-5 text-center text-white'>
                        At CyberdevBD, we&apos;re here to help you attract more customers, outshine your competitors, and boost your profits. Our expert team offers top-notch services in web design, software solutions, e-commerce, SEO, social media, IT management, and consultancy. Trust us to protect and elevate your reputation with quality and care.
                    </p>

                    <Link href='/' style={{ background: '#8C2E47', color: '#fff' }} className="btn btn-md my-5">
                        <span className='text-white'>Our Services</span>
                        <MdMiscellaneousServices className='h-6 w-6' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
