import { BiPlayCircle } from "react-icons/bi";

function Right() {
  return (
    <div className=" relative flex w-full flex-col items-center bg-dark-blue pt-8 pb-10 md:items-end md:justify-center md:pr-8 md:pt-0 md:pb-0">
      <h1 className=" z-10 text-center text-[36px] font-bold text-dark-blue lg:text-[52px]">
        One More Friend
      </h1>
      <h2 className=" z-10 mt-1 text-center text-[24px] font-bold text-dark-blue md:text-right lg:text-[36px]">
        Thousands More Fun!
      </h2>
      <p className="z-10 mt-4 max-w-[390px] px-5 text-center text-[12px] font-semibold text-neutral-80 md:px-0 md:text-right">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>
      {/* 2 Buttons */}
      <div className=" mt-8 flex justify-center gap-4 md:justify-end">
        <button className=" button-large-padding z-10 flex items-center justify-center rounded-full border-2 border-dark-blue text-[16px] font-semibold text-dark-blue transition duration-200 hover:shadow-lg md:max-lg:px-5">
          View Intro <BiPlayCircle className=" ml-2" />
        </button>
        <button className=" button-large-padding z-10 rounded-full border-2 border-dark-blue bg-dark-blue text-[16px] text-white transition duration-200 hover:shadow-lg md:max-lg:px-5">
          Explore Now
        </button>
      </div>

      {/* Additional Backgrounds */}
      <div className=" absolute -bottom-8 -right-12 z-[1] h-[645px] w-[775px] rotate-[9deg] rounded-[75px] bg-hero md:left-0 md:-bottom-[100px] md:rotate-[25deg]" />
    </div>
  );
}

export default Right;
