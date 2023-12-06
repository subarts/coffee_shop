import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import MenuSelect from "@/components/MenuSelect";

export default function Coffee() {
  return (
    <>
      <Header />
      <main className="flex items-center flex-col">
        <h1 className="leading-[105%] text-[#403F3D] text-7xl font-semibold">
          &nbsp;&nbsp;Behind each of our cups
          <br /> hides an
          <span className="captionItalic"> amazing surprise</span>
        </h1>
        <MenuSelect />
        <div className="flex justify-center gap-8 flex-wrap wrapper">
          <div className="coffeeItem">
            <Image
              className="rounded-[2.5rem]"
              src={"./image/coffee/coffee-1.svg"}
              alt="irish coffee"
              width={310}
              height={310}
            />
            <div>
              <h3>Irish coffee</h3>
              <p>
                Fragrant black coffee with Jameson Irish whiskey and whipped
                milk
              </p>
              <span>$7.00</span>
            </div>
          </div>
          <div className="coffeeItem">
            <Image
              src={"./image/coffee/coffee-2.svg"}
              alt="irish coffee"
              width={310}
              height={310}
            />

            <h3>Kahlua coffee</h3>
            <p>
              Classic coffee with milk and Kahlua liqueur under a cap of frothed
              milk
            </p>
            <span>$7.00</span>
          </div>
          <div className="coffeeItem">
            <Image
              src={"./image/coffee/coffee-3.svg"}
              alt="irish coffee"
              width={310}
              height={310}
            />
            <h3>Honey raf</h3>
            <p>Espresso with frothed milk, cream and aromatic honey</p>
            <span>$5.50</span>
          </div>
          <div className="coffeeItem">
            <Image
              src={"./image/coffee/coffee-4.svg"}
              alt="irish coffee"
              width={310}
              height={310}
            />
            <h3>Ice cappuccino</h3>
            <p>Cappuccino with soft thick foam in summer version with ice</p>
            <span>$5.00</span>
          </div>
          <div className="coffeeItem">
            <Image
              src={"./image/coffee/coffee-5.svg"}
              alt="irish coffee"
              width={310}
              height={310}
            />
            <h3>Espresso</h3>
            <p>Classic black coffee</p>
            <span>$4.50</span>
          </div>
          <div className="coffeeItem">
            <Image
              src={"./image/coffee/coffee-6.svg"}
              alt="irish coffee"
              width={310}
              height={310}
            />
            <h3>Latte</h3>
            <p>
              Espresso coffee with the addition of steamed milk and dense milk
              foam
            </p>
            <span>$5.50</span>
          </div>
          <div className="coffeeItem">
            <Image
              src={"./image/coffee/coffee-7.svg"}
              alt="irish coffee"
              width={310}
              height={310}
            />
            <h3>Latte macchiato</h3>
            <p>Espresso with frothed milk and chocolate</p>
            <span>$5.50</span>
          </div>
          <div className="coffeeItem">
            <Image
              src={"./image/coffee/coffee-8.svg"}
              alt="irish coffee"
              width={310}
              height={310}
            />
            <h3>Coffee with cognac</h3>
            <p>Fragrant black coffee with cognac and whipped cream</p>
            <span>$6.50</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
