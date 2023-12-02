import Header from "@/components/Header"
import Enjoy from "@/components/Enjoy"
import Image from "next/image";
import CoffeeSlider from "@/components/CoffeeSlider";
import About from "@/components/About";
import MobileApp from "@/components/mobileApp";
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
    </>
  )
}
/* display: flex;
flex-direction: column;
gap: 40px;
justify-content: center; */