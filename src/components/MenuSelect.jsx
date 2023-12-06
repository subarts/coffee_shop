import React from "react";
import Image from "next/image";
const MenuSelect = () => {
  return (
    <fieldset className="flex gap-4">
      <label className="w-[7.1875rem] h-[2.875rem] ">
        <input
          type="radio"
          id="coffee"
          name="menu"
          value="coffee"
          defaultChecked
        />
        <div className="menuItem h-full  bg-[#E1D4C9] border border-[#C1B6AD] rounded-3xl flex items-center pl-2 gap-2">
          <div className="w-[1.875rem] h-[1.875rem] rounded-full bg-[#C1B6AD] flex items-center justify-center">
            <Image
              src="./icons/coffeeCup.svg"
              alt="coffee cup"
              width={16}
              height={24}
            />
          </div>
          <span>Coffee</span>
        </div>
      </label>

      <label className="w-[5.625rem] h-[2.875rem] ">
        <input type="radio" id="tea" name="menu" value="tea" />
        <div className="menuItem h-full bg-[#E1D4C9] border border-[#C1B6AD] rounded-3xl flex items-center  pl-2 gap-2">
          <div className="w-[1.875rem] h-[1.875rem] rounded-full bg-[#C1B6AD]  flex items-center justify-center">
            <Image
              src="./icons/teaCup.svg"
              alt="tea cup"
              width={16}
              height={24}
            />
          </div>
          <span>Tea</span>
        </div>
      </label>
      <label className=" w-[7.1875rem] h-[2.875rem] ">
        <input type="radio" id="desert" name="menu" value="desert" />
        <div className="menuItem h-full bg-[#E1D4C9] border border-[#C1B6AD] rounded-3xl flex items-center  pl-2 gap-2">
          <div className="w-[1.875rem] h-[1.875rem] rounded-full bg-[#C1B6AD]  flex items-center justify-center">
            <Image
              src="./icons/desert.svg"
              alt="desert"
              width={16}
              height={24}
            />
          </div>
          <span>Desert</span>
        </div>
      </label>
    </fieldset>
  );
};

export default MenuSelect;
