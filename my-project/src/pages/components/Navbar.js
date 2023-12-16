import React from "react"
import { CiInstagram ,CiSearch} from "react-icons/ci";
import { FaYoutube,FaTiktok } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Drawer from "./Drawer"
import Image from 'next/image'
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { useRouter } from 'next/router'
  

  const options = ['United States (USD $)', 'Mongolia (MNT ₮)', 'China (CNY  yuan)'];
export default function Navbar(){
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

    const [selectedOption, setSelectedOption] = useState(options[0]);
//react drawer ashiglah
    const [isOpen, setIsOpen] =useState(false)
    const router=useRouter();
    const sz=25;
    return(
      <main>
        <div className="lg:h-44 bg-slate-500 w-screen">
          {isDesktopOrLaptop && <div className="lg:h-8  w-screen flex justify-end items-center bg-white px-6 pr-12">
 <div className="gap-x-2 flex">
<CiInstagram  color="black"/>
<FaYoutube color="black"/>
<FaTiktok  color="black"/></div>
<Dropdown
  options={options}
  selectedOption={selectedOption}
  onSelect={setSelectedOption}
/>
</div> }
<div className="h-44 w-screen flex items-center justify-between pl-3 pb-8 fixed top-25 left-0 right-0 bg-slate-300">
<Drawer/>
<div className="w-36 h-24 bg-black"></div>
<div className="w-48 h-full bg-slate-200 flex items-center justify-evenly">
  {isDesktopOrLaptop && 
  
  <IoPersonOutline onClick={router.push('/Login')} color="black" size={sz} 
  />
     }
<CiSearch color="black"  size={sz}/>
<BsBag color="black"  size={sz}/>
</div>
</div>

        </div>
        </main>
    );
}