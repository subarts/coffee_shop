import Image from "next/image";
const Header = () => {
  return (
    <header className="w-96 flex justify-between">
      <Image
        src="/icons/logo(1).svg"
        alt="logo"
        width={100}
        height={65}
        priority={true}
      ></Image>
      <nav>
        <ul className="flex">
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
