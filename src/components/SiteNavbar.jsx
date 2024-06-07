import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo/cyberdev white.png'
import Image from 'next/image'
import { FaDownload } from 'react-icons/fa'

const SiteNavbar = () => {
    return (
        <div style={{ borderColor: '#8C2E47' }} className='absolute z-40 w-full border-b-2'>
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-white">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/service'>Services</Link></li>
                            <li><Link href='/team'>About Us</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link href='/' className="p-2">
                        <Image src={logo} alt="Cyberdev" height={60} width={200} srcset="" re />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/service'>Services</Link></li>
                        <li><Link href='/About Us'>Team</Link></li> 
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>

                <div className="navbar-end gap-5">
                    <Link href='/' style={{ background: '#8C2E47', color: '#fff' }} className="btn btn-md">Brochure
                        <FaDownload />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default SiteNavbar