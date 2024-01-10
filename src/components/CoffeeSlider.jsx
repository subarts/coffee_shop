import React from "react"
import Image from "next/image"
const CoffeeSlider = () => {
  return (
    <section
      className=" w-[94.44444%] h-[49.9375rem] flex flex-col items-center mt-[6.25rem]"
      id="favorite"
    >
      <h2 className="text-6xl leading-tight	 font-semibold">
        Choose your
        <span className="captionItalic"> favorite </span>
        coffee
      </h2>
      <div className="h-[40rem] w-[99.4%] mt-10 flex flex-row items-center justify-between">
        <div className="roundAboutArrow">
          <svg
            className="arrow rotate-180"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
              stroke="#665F55"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center flex-col h-[40rem] ">
          <Image
            src="/image/coffee-slider-1.svg"
            alt="logo"
            width={480}
            height={480}
          ></Image>
          <div className="flex flex-col items-center mt-5 gap-4">
            <h3 className="text-2xl leading-[125%] font-semibold">
              S’mores Frappuccino
            </h3>
            <p className="gap-1">
              This new drink takes an espresso and mixes it with brown
              <br />
              &nbsp; sugar and cinnamon before being topped with oat milk.
            </p>
            <p className="font-semibold leading-[125%] text-2xl">$5.50</p>
          </div>
        </div>
        <div className="roundAboutArrow ">
          <svg
            className="arrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
              stroke="#665F55"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="sliderList mt-6">
        <div className="sliderLine"></div>
        <div className="sliderLine sliderDisabled"></div>
        <div className="sliderLine sliderDisabled"></div>
      </div>
    </section>
  )
}
export default CoffeeSlider
