import Image from 'next/image';
import React from 'react';
import logo from "@/assest/logo.png"
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[#071E17] text-white p-10">
            <aside>
               <Image src={logo}  alt="logo" width={200} height={80}></Image>
                <p>
                    TECH repair Hub Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
               <div className='flex space-x-7 text-[#00AA55] mt-5'>
               <Facebook></Facebook><Instagram></Instagram> <Youtube></Youtube><Linkedin></Linkedin>
               </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;