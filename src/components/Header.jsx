import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="m-auto mt-5 w-[85rem] h-[3.75rem] items-center flex justify-between ">
      <Image
        src="/icons/logo(1).svg"
        alt="logo"
        width={100}
        height={65}
        priority={true}
      ></Image>
      <nav className="flex">
        <ul className="flex gap-10">
          <li>
            <a href="#favorite">Favorite coffee</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#MobileApp">Mobile app</a>
          </li>
          <li>
            <a href="#footer">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className=" flex gap-2">
        <ul>
          <li>Menu</li>
        </ul>
        <Image
          src="/icons/coffee-cup.svg"
          alt="coffe cup"
          width={22}
          height={28}
          priority={true}
        ></Image>
      </div>
    </header>
  );
};
export default Header;
