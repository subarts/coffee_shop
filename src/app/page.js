import Header from "@/components/Header"
export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen">
      <section className="w-[85rem] h-[40.25rem] rounded-[2.5rem] bg-[url('/image/img-hero.svg')]" >
        <h1 className="text-[#E1D4C9]"><span className="text-[#B0907A]">Enjoy</span> premium coffee at our charming cafe</h1>
        <p className="text-[#E1D4C9]">With its inviting atmosphere and delicious coffee options, the Coffee<br/>
        House Resource is a popular destination for coffee lovers and those<br/>
         seeking a warm and inviting space to enjoy their favorite beverage.</p>
      </section>
      <button>Menu</button>
    </main>
    </>
  )
}
