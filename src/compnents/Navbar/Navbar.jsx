"use client"
import Image from 'next/image';
import React from 'react';
import logo from "@/assest/logo.png"
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {

    const { data: session, status } = useSession()
    // const session = useSession()
    console.log(session);

    const navOption = () => {
        return (
            <>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About us</Link></li>
                <li><Link href={'/services'}>Services</Link></li>
                <li><Link href={'/blog'}>Blog</Link></li>
                <li><Link href={'/'}>Contact</Link></li>
                <li><Link href={'/my-booking'}>My Booking</Link></li>
            </>
        )
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navOption()}
                    </ul>
                </div>
                <a>
                    <Image src={logo} className='h-28' width={150} alt='logo'></Image>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[18px] font-semibold">
                    {navOption()}
                </ul>
            </div>
            <div className="navbar-end flex">
                <div className='grid grid-cols-1'>
                    <div className='flex space-x-5 justify-end mr-5 -mt-7'>
                        <p>delwar.hosen008@gmail.com</p>
                        <p>+001878865256</p>
                    </div>
                    <div className='flex space-x-5 justify-end mr-5 text-[18px] font-semibold'>
                        {
                            status == "authenticated" ?
                                <>
                                    <li onClick={() => signOut()}>Logout</li>
                                </> :
                                <>
                                    <Link href={'/login'}>Login</Link>
                                    <Link href={'/register'}>Signup</Link>
                                </>
                        }
                        {/* <Link href={'/login'}>Login</Link>
                        <Link href={'/register'}>Signup</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;