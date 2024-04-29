import { BiPlayCircle } from "react-icons/bi";
import HeroBanner from "../../../assets/hero-banner.png";

function Banner() {
  return (
    <>
      {/* container */}
      <div className=" section">
        {/* Flex */}
        <div className=" mt-3 grid grid-cols-1 overflow-hidden rounded-[16px] bg-hero lg:grid-cols-2">
          {/* Text */}
          <div className=" px-4 pt-6 sm:px-6 md:px-8 lg:relative lg:order-2 lg:flex lg:flex-col lg:items-end lg:pb-8 lg:text-right xl:px-12">
            <h1 className=" z-10 text-[42px] font-bold text-dark-blue sm:max-lg:text-[52px] md:max-lg:text-[60px] lg:text-white">
              One More Friend
            </h1>
            <h2 className=" z-10 mt-1 text-[26px] font-bold text-dark-blue sm:max-lg:text-[36px] md:max-lg:text-[44px] lg:text-white">
              Thousands More Fun!
            </h2>
            <p className=" z-10 mt-2 max-w-[350px] text-[12px] font-semibold text-neutral-80 md:max-lg:max-w-[370px] md:max-lg:text-[14px] lg:text-neutral-20">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className=" z-10 mt-8 flex gap-4">
              <button className=" button-large-padding flex items-center justify-center rounded-full border-2 border-dark-blue text-[16px] font-semibold text-dark-blue transition duration-200 hover:shadow-lg lg:border-white lg:text-white">
                View Intro <BiPlayCircle className=" ml-2" />
              </button>
              <button className=" button-large-padding rounded-full border-2 border-dark-blue bg-dark-blue text-[16px] font-semibold text-white transition duration-200 hover:shadow-lg lg:border-white lg:bg-white lg:text-dark-blue">
                Explore Now
              </button>
            </div>

            {/* Additonal Bckground when large screen */}
            <div className=" absolute -left-32 -top-8 hidden h-[800px] w-[916px] -rotate-[15deg] rounded-[99px] bg-dark-blue-80 lg:block" />
          </div>
          {/* Image */}
          <div className=" relative lg:order-1 lg:flex lg:items-end">
            <img
              src={HeroBanner}
              className=" relative z-10 object-cover"
              alt=""
            />
            {/* Additional Background, hidden when large screen */}
            <div className=" absolute -bottom-[735px] -left-[116px] h-[816px] w-[996px] rotate-[7deg] rounded-[99px] bg-dark-blue-80 sm:-bottom-[680px] md:-bottom-[650px] lg:hidden" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
