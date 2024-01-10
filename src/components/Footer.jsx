import React from "react"
import Image from "next/image"
const Footer = () => {
  return (
    <footer
      className=" mb-10 bg-[#665F55] min-h-[28.125rem] pl-[6.5rem] m-auto rounded-[2.5rem] flex-wrap flex items-center mt-[6.25rem] text-[#E1D4C9] container"
      id="footer"
    >
      <div className="flex flex-col gap-[2.65rem]  left-[6.2rem]">
        <h2 className="text-6xl leading-[125%] font-semibold">
          Sip, Savor, Smile.
          <br />
          <span className="captionItalic">It’s coffee time!</span>
        </h2>
        <div className="flex flex-row gap-[0.75rem]">
          <a className="cyrcle" href="https://www.twitter.com" target="_blank">
            <Image
              src={"./icons/Vector (1).svg"}
              alt="X"
              width={24}
              height={24}
            />
          </a>
          <a
            className="cyrcle"
            href="https://www.instagram.com"
            target="_blank"
          >
            <Image
              src={"./icons/instagram.svg"}
              alt="instagram"
              width={24}
              height={24}
            />
          </a>
          <a className="cyrcle" href="https://www.facebook.com" target="_blank">
            <Image
              src={"./icons/facebook.svg"}
              alt="facebook"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
      <div className="flex h-[11.625rem] pl-[8.5rem] gap-10 flex-col  left-[14.75rem] ">
        <h3 className="text-2xl font-semibold  leading-tight">Contact us</h3>
        <div className="flex flex-col gap-4">
          <a
            className="contactItem"
            href="https://www.google.com/maps/place/Moro+Cafet%C3%ADn/@-53.7860793,-67.7009302,18z/data=!4m6!3m5!1s0xbc4b17bdfb2b47b7:0x33a7c48f6365e657!8m2!3d-53.7855008!4d-67.7006449!16s%2Fg%2F11rgccq6lj?entry=ttu"
            target="_blank"
          >
            <Image
              src={"./icons/pin-alt.svg"}
              alt="location"
              width={20}
              height={20}
            />
            <span>8558 Green Rd., LA</span>
          </a>
          <a className="contactItem" href="tel:+16035550123">
            <Image
              src={"./icons/phone.svg"}
              alt="phone"
              width={20}
              height={20}
            />
            <span>+1 (603) 555-0123</span>
          </a>
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
  )
}

export default Footer
