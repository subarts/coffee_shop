import React from "react";
import Image from "next/image";
const MobileApp = () => {
  return (
    <section className="w-[85rem] h-[39.375rem] mt-[6.25rem] flex justify-between items-center">
      <div className="flex flex-col gap-10">
        <h2 className="text-6xl leading-[125%] font-semibold">
          <span className="captionItalic">Download</span> our apps
          <br /> to start ordering
        </h2>
        <p>
          Download the Resource app today and experience the comfort of ordering
          your
          <br /> favorite coffee from wherever you are
        </p>
        <div className="flex gap-5">
          <button className="w-[12.5rem] h-16 bg-[#E1D4C9] rounded-[2rem] buttonMobile">
            <div className="buttonStore">
              <Image
                src={"/icons/Icon (1).svg"}
                alt="apple icon"
                width={28}
                height={28}
              />

              <p className="buttonMobText">
                <span className="text-[10px]">Available on the</span>
                <br />
                <span>App Store</span>
              </p>
            </div>
          </button>
          <button className="w-[12.5rem] h-16 bg-[#E1D4C9] rounded-[2rem] buttonMobile">
            <div className="buttonStore">
              <Image
                className="relative left-1.5"
                src={"/icons/Icon (2).svg"}
                alt="google play icon"
                width={36}
                height={36}
              />

              <p className="buttonMobText">
                <span className="text-[10px] relative -left-3.5 ">
                  Available on
                </span>
                <br />
                <span>Google Play</span>
              </p>
            </div>
          </button>
        </div>
      </div>
      <Image
        src={"./image/mobile-screens (1).svg"}
        alt="two phone"
        width={630}
        height={630}
      />
    </section>
  );
};

export default MobileApp;
