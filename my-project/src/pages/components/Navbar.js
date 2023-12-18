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
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";


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
        <div className="lg:h-44  w-screen">
          
<div className="h-44 w-screen flex flex-col items-center justify-between pl-3 pb-8 fixed top-0 left-0 right-0 bg-white">
  {isDesktopOrLaptop && <div className="lg:h-8  w-screen flex justify-end items-center bg-white px-6 pr-12">
 <div className="gap-x-2 flex">
<CiInstagram  color="black"/>
<FaYoutube color="black"/>
<FaTiktok  color="black"/>

</div>
<Dropdown
  options={options}
  selectedOption={selectedOption} 
  onSelect={setSelectedOption}
/>
</div> }
<div className="flex w-full  justify-between">
<Drawer/>
<div className="w-60 h-full bg-white flex justify-center items-center">
  <img src="https://grailedlocker.us/cdn/shop/files/CEED7BCF-254D-4C79-9C43-67FEF46B37F3.jpg?v=1698373314&width=340"/>
</div>
<div className="w-60 h-full flex items-center justify-evenly">
  {isDesktopOrLaptop && 
  <Link href="/Login"> 
  <IoPersonOutline color="black" size={sz}/></Link>
     }
<CiSearch color="black"  size={sz}/>
<BsBag color="black"  size={sz}/>
<DarkModeToggle/>
</div>
</div>
</div>

        </div>
        </main>
    );
}