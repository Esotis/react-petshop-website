import { useState } from "react";
import { BiPlayCircle } from "react-icons/bi";
import WomanBanner from "../../../assets/hero-banner-woman.png";
import AnimalBanner from "../../../assets/hero-banner.png";

function MainDisplay() {
  const [largeScreen, setLargeScreen] = useState<boolean>(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) return setLargeScreen(true);
    setLargeScreen(false);
  });

  document.addEventListener("readystatechange", () => {
    if (window.innerWidth >= 1024) setLargeScreen(true);
  });

  return (
    <div className=" mt-9 flex flex-wrap items-center justify-center">
      {/* Text Container */}
      <div className=" section  w-full lg:w-1/2">
        <h1 className=" relative text-[46px] font-bold text-dark-blue lg:text-[48px]">
          <span className="relative z-10">One More Friend</span>
          {/* Background */}
          <div className=" top-1/2 -left-2 hidden h-[57px] w-[57px] -translate-y-1/2 rotate-[25deg] rounded-[20px] bg-moon-yellow lg:absolute lg:block" />
        </h1>
        <h2 className=" text-[28px] font-bold text-dark-blue lg:text-[36px]">
          Thousands More Fun!
        </h2>
        <p className="mt-2 text-justify text-sm font-semibold lg:max-w-[430px]">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        {/* 2 Buttons */}
        <div className=" mt-8 flex gap-4">
          <button className=" button-large-padding flex items-center justify-center rounded-full border-2 border-dark-blue text-[16px] font-semibold text-dark-blue transition duration-200 hover:shadow-lg">
            View Intro <BiPlayCircle className=" ml-2" />
          </button>
          <button className=" button-large-padding rounded-full border-2 border-dark-blue bg-dark-blue text-[16px] text-white transition duration-200 hover:shadow-lg">
            Explore Now
          </button>
        </div>
      </div>

      {/* Animal Image */}
      <div className=" relative w-full pt-8 lg:w-1/2 lg:pt-0">
        <img
          src={largeScreen ? WomanBanner : AnimalBanner}
          className=" relative z-10 object-cover"
          alt=""
        />
        {/* Additional Backgrounds */}
        <div className=" absolute top-28 -right-40 z-[1] h-[530px] w-[530px] rotate-[31deg] rounded-[48px] bg-moon-yellow lg:-right-16 xl:right-20 xl:top-32 xl:rotate-[25deg]" />
        <div className=" absolute top-32 -right-24 h-[530px] w-[530px] rotate-[11deg] rounded-[48px] bg-dark-blue lg:-right-8 lg:top-[150px] xl:right-28 xl:top-[165px] " />
      </div>
    </div>
  );
}

export default MainDisplay;
