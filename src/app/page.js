import Header from "@/components/Header"
import Enjoy from "@/components/Enjoy"
import CoffeeSlider from "@/components/CoffeeSlider";
import About from "@/components/About";
import MobileApp from "@/components/mobileApp";
import Footer from "@/components/Footer";
import { Suspense } from "react";
export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center ">
      <Enjoy/>
      <CoffeeSlider/>
      <About/>
      
      <MobileApp/>
    </main>
    <Footer/>
    </>
  )
}
