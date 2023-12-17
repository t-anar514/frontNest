import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube,FaTiktok } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useState } from "react";

//https://grailedlocker.us/collections/zig-zag-shoelaces/products/copy-of-dark-multi-zig-zag-shoelaces
const options = ['United States (USD $)', 'Mongolia (MNT ₮)', 'China (CNY  yuan)'];

export default function Footer(){
    
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return(
        <div className="w-screen bg-white">
        <div className="w-full grid lg:grid-cols-4 grid-cols-1  pl-12 py-16" >
    <div className="flex flex-col gap-y-4 text-black items-start">
        <button className="">Search</button>
        <button className="">Refund Policy</button>
        <button className="">Shipping Policy</button>
        <button className="">Contact us</button>
        <button className="">Pricavy Policy</button>
        <button className="">Terms of Service</button>
    </div>
    <div className="flex flex-col items-start gap-y-4 text-black">
        <p className="text-2xl">Sign up and Save</p>
        <p> Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
        <div>
        <div className="relative text-black ">
        <input
          className="py-2  px-4  border-b-2 border-black focus:outline-non focus:border-blue-500"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex pt-8 gap-x-4">
<CiInstagram size={30} color="black"/>
<FaYoutube size={30} color="black"/>
<FaTiktok  size={30} color="black"/>
      </div>
        </div>
    </div>
    <div></div>
    <div></div>
        </div>
        <div className="w-full ">
            <div className="w-full flex justify-center py-2">
        <Dropdown
  options={options}
  selectedOption={selectedOption}
  onSelect={setSelectedOption}
/></div>
<div className="h-8 w-full ">
{/* ene deer tolboriin barimtuuud orno */}
</div>
<div className="w-full flex justify-center pt-6 pb-12 text-black">
<p>
    @ 2023 Grailed Locker
</p></div>
        </div>
        </div>
    );
}