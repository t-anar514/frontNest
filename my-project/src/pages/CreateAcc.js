import React from "react";
import Link from "next/link";

export default function CreateAcc() {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="max-w-md w-full h-full lg:pt-16 p-8">
                <h2 className="text-4xl text-center text-black mb-8">CREATE ACCOUNT</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-black text-sm mb-2" htmlFor="email">
                        F I R S T  &nbsp; N A M E
                        </label>
                        <input className="shadow appearance-none border border-slate-300 hover:border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm mb-2" htmlFor="email">
                        L A S T  &nbsp; N A M E
                        </label>
                        <input className="shadow appearance-none border border-slate-300 hover:border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm mb-2" htmlFor="email">
                            E M A I L
                        </label>
                        <input className="shadow appearance-none border border-slate-300 hover:border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm mb-2" htmlFor="password">
                            P A S S W O R D
                        </label>
                        <input className="shadow appearance-none border border-slate-300 hover:border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
                    </div>
                    <div className="flex items-center w-full pt-4">
                        <button className="bg-black hover:bg-slate-900 text-white font-bold py-3 px-4 w-full focus:outline-none focus:shadow-outline" type="submit">
                            C r e a t e 
                        </button>
                    </div>
                    <Link href="/Login">
                        <p className="mt-4 text-black hover:text-slate-900 cursor-pointer">Already have an account? Sign In</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}
