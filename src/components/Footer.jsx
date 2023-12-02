import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-[#665F55] w-[85rem] h-[450px] m-auto rounded-[2.5rem] flex items-center mt-[6.25rem] text-[#E1D4C9]">
      <div className="flex flex-col gap-[2.65rem] relative left-20">
        <h2 className="text-6xl leading-[125%] font-semibold">
          Sip, Savor, Smile.
          <br />
          <span className="captionItalic">It’s coffee time!</span>
        </h2>
        <div className="flex flex-row gap-[0.75rem]">
          <div className="cyrcle">
            <Image
              src={"./icons/Vector (1).svg"}
              alt="X"
              width={24}
              height={24}
            />
          </div>
          <div className="cyrcle">
            <Image
              src={"./icons/instagram.svg"}
              alt="instagram"
              width={24}
              height={24}
            />
          </div>
          <div className="cyrcle">
            <Image
              src={"./icons/facebook.svg"}
              alt="facebook"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="flex h-[11.625rem] gap-10 flex-col relative left-[14.75rem] ">
        <h3 className="text-2xl font-semibold  leading-tight">
          Contact us
        </h3>
        <div className="flex flex-col gap-5">
          <div className="contactItem">
            <Image
              src={"./icons/pin-alt.svg"}
              alt="location"
              width={20}
              height={20}
            />
            <span>8558 Green Rd., LA</span>
          </div>
          <div className="contactItem">
            <Image
              src={"./icons/phone.svg"}
              alt="phone"
              width={20}
              height={20}
            />
            <span>+1 (603) 555-0123</span>
          </div>
          <div className="contactItem">
            <Image
              src={"./icons/clock.svg"}
              alt="clock"
              width={20}
              height={20}
            />
            <span>Mon-Sat: 9:00 AM – 23:00 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
