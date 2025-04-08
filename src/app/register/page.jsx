"use client"
import Link from 'next/link';
import React from 'react';
import { registerUser } from '../actions/auth/registerUser';

const Signup = () => {

    const handleRegister =async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({name,email,password});
    }
    return (
        <div className='md:p-5'>
            <h2 className='text-[36px] font-semibold underline text-center uppercase'>Please Siginup</h2>
            <div className='flex justify-center '>
                <div className='bg-white p-10 rounded-xl shadow-2xl'>
                    <form onSubmit={handleRegister} className="rounded-lg space-y-4">
                        <div className="form-control">
                            <label className="fieldset-label font-semibold">Email</label>
                            <input type="text" name='name' className="input w-full" placeholder="Enter Your name" required />
                        </div>
                        <div className="form-control">
                            <label className="fieldset-label font-semibold">Email</label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input w-full" required/>
                        </div>
                        <div className="form-control">
                            <label className="fieldset-label font-semibold">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Enter Your Password" required />
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