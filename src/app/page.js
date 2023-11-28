import Header from "@/components/Header"
import Enjoy from "@/components/Enjoy"
import Image from "next/image";
export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center ">
      <Enjoy/>
      <section className=" w-[85rem] h-[49.9375rem] flex flex-col items-center mt-[6.25rem]">
      <h2 className="text-6xl leading-[125%] font-semibold">Choose your <span className="captionItalic">favorite</span> coffee</h2>
      <div className="h-[40rem] w-[99.4%] mt-10 flex flex-row items-center justify-between">
      <div className="roundAboutArrow">
      <Image className="rotate-180"
        src="/icons/arrow-right.svg"
        alt="arrow left"
        width={24}
        height={24}
        >
        </Image>
        </div>
        <div className="flex items-center flex-col">
        <Image
          src="/image/coffee-slider-1.svg"
          alt="logo"
          width={480}
          height={480}>
        </Image>
        <h3 className="text-2xl leading-[125%] font-semibold">S’mores Frappuccino</h3>
        <p>This new drink takes an espresso and mixes it with brown<br/>
         sugar and cinnamon before being topped with oat milk.</p>
        <p>$5.50</p>
      </div>
      <div className="roundAboutArrow">
      <Image 
        src="/icons/arrow-right.svg"
        alt="arrow left"
        width={24}
        height={24}
        >
        </Image>
        </div>
        </div>
      </section>
    </main>
    </>
  )
}
/* display: flex;
flex-direction: column;
gap: 40px;
justify-content: center; */