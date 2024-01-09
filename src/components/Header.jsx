import React, { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
const Header = () => {
  return (
    <header className="m-auto mt-5  h-[3.75rem] items-center flex justify-between ">
      <Link href={"./"}>
        <Image
          src="/icons/logo(1).svg"
          alt="logo"
          width={100}
          height={65}
          priority={true}
        ></Image>
      </Link>
      <nav className="flex">
        <ul className="flex gap-10 ">
          <li className="navItem">
            <a href="#favorite">Favorite coffee</a>
          </li>
          <li className="navItem">
            <a href="#about">About</a>
          </li>
          <li className="navItem">
            <a href="#MobileApp">Mobile app</a>
          </li>
          <li className="navItem">
            <a href="#footer">Contact us</a>
          </li>
        </ul>
      </nav>
      <Link href={"./coffee"}>
        <div className=" flex gap-2">
          <span>Menu</span>
          <Image
            src="/icons/coffee-cup.svg"
            alt="coffe cup"
            width={22}
            height={28}
            priority={true}
          ></Image>
        </div>
      </Link>
    </header>
  )
}
export default Header
