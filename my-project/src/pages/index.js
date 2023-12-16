  import React from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"

export default function Home() {
  return (
<main className='max-w-screen min-h-screen bg-red-500'>
  <Navbar/>
  <Homepage/>
<Footer/>
</main>
  )
}
