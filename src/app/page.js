import Header from "@/components/Header"
export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center ">
      <section className="w-[85rem] h-[40.25rem] rounded-[2.5rem] bg-[url('/image/img-hero.svg')] mt-5  bg-cover bg-center flex flex-col gap-10 justify-center items-start" >
        <h1 className="leading-[105%] text-[#E1D4C9] text-7xl font-semibold"><span className="text-[#B0907A] italic">Enjoy</span> premium<br/> coffee at our<br/> charming cafe</h1>
        <p className="text-[#E1D4C9]">With its inviting atmosphere and delicious coffee options, the Coffee<br/>
        House Resource is a popular destination for coffee lovers and those<br/>
         seeking a warm and inviting space to enjoy their favorite beverage.</p>
         <button className="text-white w-[12.5rem] h-16 bg-[#E1D4C9] rounded-[2rem]">Menu</button>
      </section>
     
    </main>
    </>
  )
}
/* display: flex;
flex-direction: column;
gap: 40px;
justify-content: center; */