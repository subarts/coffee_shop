import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header class="m-auto mt-5 w-[85rem] h-[3.75rem] items-center flex justify-between ">
      <Image
        src="/icons/logo(1).svg"
        alt="logo"
        width={100}
        height={65}
        priority={true}
      ></Image>
      <nav className="flex">
        <ul className="flex gap-10">
          <li>Favorite coffee</li>
          <li>About</li>
          <li>Mobile app</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div>
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
