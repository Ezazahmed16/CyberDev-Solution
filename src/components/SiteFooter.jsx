import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SiteFooter = () => {
    return (
        <div className='bg-neutral'>
            <footer className="footer p-10 text-neutral-content justify-between items-start mx-auto max-w-7xl">
                <nav>
                    <h1 className='text-white text-2xl font-semibold'>CyberDev Solution</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. Hic, quo.</p>
                    <div className="flex gap-5 my-5">
                        <FaFacebook className='h-6 w-6'/>
                        <FaTwitter className='h-6 w-6'/>
                        <FaLinkedin className='h-6 w-6'/>
                        <FaInstagramSquare className='h-6 w-6'/>

                    </div>
                </nav>
                <nav>
                    <header className="footer-title">Quick Links</header>
                    <Link href='/' className="link link-hover">Services</Link>
                    <Link href='/' className="link link-hover">Portfolio</Link>
                    <Link href='/' className="link link-hover">About Us</Link>
                    <Link href='/' className="link link-hover">Contact Us</Link>
                </nav>
                <nav>
                    <header className="footer-title">Address</header>
                    <p>3489 7th St #301, <br /> San Francisco, CA 94101</p>
                </nav>
            </footer>
        </div>
    )
}

export default SiteFooter