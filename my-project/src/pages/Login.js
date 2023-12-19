import React from "react";
import Link from "next/link";

export default function Login(){
    return(
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="max-w-md w-full h-full pt-64 p-8">
                <h2 className="text-4xl d text-center text-black mb-8">LOGIN </h2>
                <form>
                    <div className="mb-4 pt-8">
                        <label className="block text-black text-sm  mb-2" htmlFor="email">
                            E M A I L
                        </label>
                        <input className="shadow appearance-none border   border-slate-300 hover:border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
                    </div>
                    <div className="mb-6 pt-12 flex justify-between">
                        <label className="block text-black text-sm  mb-2" htmlFor="password">
                            P A S S W O R D
                        </label>
                        <Link href="/forgotPassword">
                            <p className="inline-block align-baseline  text-sm text-black hover:text-slate-900">
                                Forgot Password?
                            </p>
                        </Link> </div>
                        <input className="shadow appearance-none border hover:border-black border-slate-300  w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline" id="password" type="password" />
                   
                    <div className="flex items-center w-full pt-4 justify-between">
                        <button className="bg-black hover:bg-slate-900 text-white py-3 px-4 w-full  focus:outline-none focus:shadow-outline" type="submit">
                             S i g n  &nbsp; I n
                        </button>
                      
                    </div>
                    <Link href="/CreateAcc">
                    <p className="mt-4 text-black">Create account</p></Link>
                </form>
            </div>
        </div>
    );
}
