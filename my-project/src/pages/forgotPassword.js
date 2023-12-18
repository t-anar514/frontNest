import React from "react";
import Link from "next/link";

export default function forgotPassword() {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="max-w-md w-full h-full lg:pt-16 p-8">
                <h2 className="text-4xl text-center text-black mb-8">FORGOT PASSWORD</h2>
                <form>
                    <div className="mb-4 pt-8">
                        <label className="block text-black text-sm mb-2" htmlFor="email">
                            E M A I L
                        </label>
                        <input className="shadow appearance-none border border-slate-300 hover:border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                    </div>
                    <div className="flex items-center w-full pt-4">
                        <button className="bg-black hover:bg-slate-900 text-white py-3 px-4 w-full focus:outline-none focus:shadow-outline" type="submit">
                            Reset Password
                        </button>
                    </div>
                    <Link href="/Login">
                        <p className="mt-4 text-black hover:text-slate-900 cursor-pointer">Back to Login</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}
