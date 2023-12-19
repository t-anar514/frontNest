import React from "react"
import { CiInstagram ,CiSearch} from "react-icons/ci";
import { FaYoutube,FaTiktok } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useState ,useEffect} from "react";
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

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);
  useEffect(() => {
    const html = window.document.documentElement;
    const prevTheme = darkMode ? 'light' : 'dark';
    html.classList.remove(prevTheme);
    const nextTheme = darkMode ? 'dark' : 'light';
    html.classList.add(nextTheme);

    localStorage.setItem('theme', nextTheme);
  }, [darkMode]);


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  
 
    const [selectedOption, setSelectedOption] = useState(options[0]);
//react drawer ashiglah
    const [isOpen, setIsOpen] =useState(false)
    const router=useRouter();
    const sz=25;
    return(
      <main className="bg-white dark:bg-dark">
        <div className="lg:h-44  w-screen">
          
<div className="lg:h-44 h-36  w-screen flex flex-col items-center justify-between  pb-8 fixed top-0 left-0 right-0 bg-white dark:bg-black">
  {isDesktopOrLaptop && <div className="lg:h-8  w-screen flex justify-end items-center bg-white dark:bg-black px-6 pr-12">
 <div className="gap-x-2 flex ">
<CiInstagram  className="text-black dark:text-white" />
<FaYoutube className="text-black dark:text-white" color=""/>
<FaTiktok  className="text-black dark:text-white" color=""/>

</div>
<Dropdown
  options={options}
  selectedOption={selectedOption} 
  onSelect={setSelectedOption}
/>
</div> }
<div className="flex w-full bg-white dark:bg-black justify-between">
<Drawer/>
<div className="w-60 h-full flex justify-center items-center">
  <Link href='/'> 
  <img src="https://grailedlocker.us/cdn/shop/files/CEED7BCF-254D-4C79-9C43-67FEF46B37F3.jpg?v=1698373314&width=340"/>
  </Link>
</div>
<div className="w-60 h-full flex items-center  justify-evenly">
  {isDesktopOrLaptop && 
  <Link href="/Login"> 
  <IoPersonOutline className="text-black dark:text-white" size={sz}/></Link>
     }
<CiSearch className="text-black dark:text-white" size={sz}/>
<BsBag className="text-black dark:text-white"  size={sz}/>
<DarkModeToggle/>
</div>
</div>
</div>

        </div>
        </main>
    );
}