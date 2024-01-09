import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React, { Suspense, lazy } from "react"
import Image from "next/image"
import MenuSelect from "@/components/MenuSelect"
import CoffeeItems from "@/components/CoffeeItems"
export default function Coffee() {
  return (
    <>
      <Header />
      <main className="flex items-center flex-col mt-5">
        <h2 className="text-6xl leading-tight	 font-semibold text-[#403F3D] ">
          &nbsp;&nbsp;Behind each of our cups
          <br /> hides an
          <span className="captionItalic"> amazing surprise</span>
        </h2>
        <MenuSelect />
        <CoffeeItems />
      </main>
      <Footer />
    </>
  )
}
