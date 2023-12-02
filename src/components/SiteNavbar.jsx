import Link from 'next/link'
import React from 'react'

const SiteNavbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='team'>Team</Link></li>
                            <li><Link href='/service'>Service</Link></li>
                            <li><Link href='/project'>Projects</Link></li>
                            <li><Link href='/testimonial'>Testimonials</Link></li>
                        </ul>
                    </div>
                    <Link href='/' className="text-xl shadow-md font-semibold ">CyberDev Solution</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='team'>Team</Link></li>
                        <li><Link href='/service'>Service</Link></li>
                        <li><Link href='/project'>Projects</Link></li>
                        <li><Link href='/testimonial'>Testimonials</Link></li>
                    </ul>
                </div>

                <div className="navbar-end gap-5">
                    <Link href='/' style={{ border: '1px solid #20B15A' }} className="btn btn-outline btn-success">Login</Link>
                    <Link href='/' style={{ background: '#20B15A', color: '#fff' }} className="btn">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default SiteNavbar