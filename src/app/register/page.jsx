"use client"
import Link from 'next/link';
import authImage from "../../assest/auth.png"
import React from 'react';
import { registerUser } from '../actions/auth/registerUser';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const router = useRouter();
    
    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        try {
            await registerUser({ name, email, password });
            form.reset();

            router.push("/login");
        } catch (error) {
            console.error("Registration failed:", error);
        }
    }


    return (
        <div className='flex flex-col-reverse sm:flex-row justify-center md:p-5'>
            <div className=''>
                <Image src={authImage} height={450} width={500} alt="login image" />
            </div>
            <div>
                <h2 className='md:text-[28px] text-[24px] text-center md:text-start font-semibold'>Please Siginup</h2>
                <div className='bg-[#1a1a1a] rounded-xl shadow-2xl p-5 md:mt-7'>
                    <form onSubmit={handleRegister} className="rounded-lg space-y-4">
                        <div className="form-control">
                            <label className="fieldset-label font-semibold">Name</label>
                            <input type="text" name='name' className="input w-full text-[#1a1a1a]" placeholder="Enter Your name" required />
                        </div>
                        <div className="form-control">
                            <label className="fieldset-label font-semibold">Email</label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input w-full text-[#1a1a1a]" required />
                        </div>
                        <div className="form-control">
                            <label className="fieldset-label font-semibold">Password</label>
                            <input type="password" name='password' className="input w-full text-[#1a1a1a]" placeholder="Enter Your Password" required />
                            <label className="label">
                                <p className='font-semibold'> Already have an account?<Link href={"/login"} className="label-text-alt link link-hover">Please Login </Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00AA55] h-[55px] text-white w-full text-[18px]">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Signup;