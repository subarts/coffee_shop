import React from "react";
import Image from "next/image";
const CoffeeSlider = () => {
  return (
    <section className=" w-[85rem] h-[49.9375rem] flex flex-col items-center mt-[6.25rem]">
      <h2 className="text-6xl leading-[125%] font-semibold">
        Choose your
        <span className="captionItalic"> favorite </span>
        coffee
      </h2>
      <div className="h-[40rem] w-[99.4%] mt-10 flex flex-row items-center justify-between">
        <div className="roundAboutArrow">
          <Image
            className="rotate-180"
            src="/icons/arrow-right.svg"
            alt="arrow left"
            width={24}
            height={24}
          ></Image>
        </div>
        <div className="flex items-center flex-col h-[40rem]">
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
        <div className="roundAboutArrow">
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow left"
            width={24}
            height={24}
          ></Image>
        </div>
      </div>
      <div className="sliderList mt-6">
        <div className="sliderLine"></div>
        <div className="sliderLine sliderDisabled"></div>
        <div className="sliderLine sliderDisabled"></div>
      </div>
    </section>
  );
};
export default CoffeeSlider;
