import React from "react"

import Image from "next/image"
const CoffeeItems = () => {
  return (
    <div className=" flex justify-center gap-10 flex-wrap mt-10 max-w-[85rem]">
      <div className="listItem ">
        <div className="listItemImage">
          <Image
            src={"./image/coffee/coffee-1.svg"}
            alt="irish coffee"
            width={310}
            height={310}
          />
        </div>
        <div className="itemDescript">
          <h3>Irish coffee</h3>
          <p>
            Fragrant black coffee with Jameson Irish whiskey and whipped milk
          </p>
          <span>$7.00</span>
        </div>
      </div>
      <div className="listItem">
        <div className="listItemImage">
          <Image
            src={"./image/coffee/coffee-2.svg"}
            alt="Kahlua coffee"
            width={310}
            height={310}
          />
        </div>
        <div className="itemDescript">
          <h3>Kahlua coffee</h3>
          <p>
            Classic coffee with milk and Kahlua liqueur under a cap of frothed
            milk
          </p>
          <span>$7.00</span>
        </div>
      </div>
      <div className="listItem">
        <div className="listItemImage">
          <Image
            src={"./image/coffee/coffee-3.svg"}
            alt="Honey raf"
            width={310}
            height={310}
          />
        </div>
        <div className="itemDescript">
          <h3>Honey raf</h3>
          <p>Espresso with frothed milk, cream and aromatic honey</p>
          <span>$5.50</span>
        </div>
      </div>
      <div className="listItem">
        <div className="listItemImage">
          <Image
            src={"./image/coffee/coffee-4.svg"}
            alt="Ice cappuccino"
            width={310}
            height={310}
          />
        </div>
        <div className="itemDescript">
          <h3>Ice cappuccino</h3>
          <p>Cappuccino with soft thick foam in summer version with ice</p>
          <span>$5.00</span>
        </div>
      </div>
      <div className="listItem">
        <div className="listItemImage">
          <Image
            src={"./image/coffee/coffee-5.svg"}
            alt="Classic black coffee"
            width={310}
            height={310}
          />
        </div>
        <div className="itemDescript">
          <h3>Espresso</h3>
          <p>Classic black coffee</p>
          <span>$4.50</span>
        </div>
      </div>
      <div className="listItem">
        <div className="listItemImage">
          <Image
            src={"./image/coffee/coffee-6.svg"}
            alt="Latte"
            width={310}
            height={310}
          />
        </div>
        <div className="itemDescript">
          <h3>Latte</h3>
          <p>
            Espresso coffee with the addition of steamed milk and dense milk
            foam
          </p>
          <span>$5.50</span>
        </div>
      </div>
      <div className="listItem">
        <div className="listItemImage">
          <Image
            src={"./image/coffee/coffee-7.svg"}
            alt="Latte macchiato"
            width={310}
            height={310}
          />
        </div>
        <div className="itemDescript">
          <h3>Latte macchiato</h3>
          <p>Espresso with frothed milk and chocolate</p>
          <span>$5.50</span>
        </div>
      </div>
      <div className="listItem">
        <div className="listItemImage">
          <Image
            src={"./image/coffee/coffee-8.svg"}
            alt="Coffee with cognac"
            width={310}
            height={310}
          />
        </div>
        <div className="itemDescript">
          <h3>Coffee with cognac</h3>
          <p>Fragrant black coffee with cognac and whipped cream</p>
          <span>$6.50</span>
        </div>
      </div>
    </div>
  )
}

export default CoffeeItems
