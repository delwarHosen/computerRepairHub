"use client"
import Link from 'next/link';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

const login = () => {
    const router = useRouter()
    const handleLogin = async (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // signIn("credentials", { email, password, callbackUrl: '/'})

        
        try {
            const respons = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false });
            if (respons.ok) {
                router.push('/');
                form.reset()
            }
            else {
                alert("authontication faild");
            }
        }
        catch (error) {
            console.log(error);
            alert("authentication fail")
        }

    }

    return (
        <div className='md:p-5'>
            <h2 className='text-[36px] font-semibold underline text-center uppercase'>Please Login</h2>
            <div className='flex justify-center '>
                <div className='bg-white p-10 rounded-xl shadow-2xl'>
                    <form onSubmit={handleLogin} className="rounded-lg space-y-4">
                        <div className="form-control">
                            <label className="fieldset-label font-semibold">Email</label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="fieldset-label font-semibold">Password</label>
                            <input type="password" name='password' className="input w-full" placeholder="Enter Your Password" required />
                            <label className="label">
                                <p className='font-semibold'> Don't have an account?<Link href={"/register"} className="label-text-alt link link-hover">Please Signup </Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#00AA55] h-[55px] text-white w-full text-[18px]">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default login;