import React from "react"

const Enjoy = () => {
  return (
    <section className=" pl-[6.25rem] w-[85rem] h-[40.25rem] rounded-[2.5rem] bg-[url('/image/img-hero.svg')] mt-5  bg-cover bg-center flex flex-col gap-10 justify-center items-start">
      <h1 className="leading-[105%] text-[#E1D4C9] text-7xl font-semibold">
        <span className="captionItalic">Enjoy</span> premium
        <br /> coffee at our
        <br /> charming cafe
      </h1>
      <p className="text-[#E1D4C9]">
        With its inviting atmosphere and delicious coffee options, the Coffee
        <br />
        House Resource is a popular destination for coffee lovers and those
        <br />
        seeking a warm and inviting space to enjoy their favorite beverage.
      </p>
      <button className="font-semibold text-base w-[12.5rem] h-16 bg-[#E1D4C9] rounded-[2rem] flex items-center justify-center gap-2 buttonMenuIcon">
        Menu
        <svg
          className="hidden MenuIcon delay-[3000ms]"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z"
            stroke="#403F3D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341V5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675"
            stroke="#403F3D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333V4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5"
            stroke="#403F3D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663"
            stroke="#403F3D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </section>
  )
}
export default Enjoy
