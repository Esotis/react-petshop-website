import { BiPlayCircle } from "react-icons/bi";
import PawSVG from "../../../assets/paw";

function AdoptionLeft() {
  return (
    <div className=" relative flex flex-col  justify-center pl-14">
      <div className=" z-10 flex items-center ">
        <h1 className=" text-[52px] font-bold text-dark-blue ">Adoption </h1>
        <PawSVG className=" ml-2" />
      </div>
      <h2 className=" z-10 text-[32px] font-bold text-dark-blue">
        We Need Help. So Do They.
      </h2>
      <div className=" z-10 mt-3 font-semibold">
        <p className=" text-[12px]">Adopt a pet and give it a home,</p>
        <p className=" text-[12px]">
          it will be love you back unconditionally.
        </p>
      </div>
      <div className=" z-10 mt-8 flex gap-4">
        <button className=" button-large-padding rounded-full border-2 border-dark-blue bg-dark-blue text-[16px] text-white transition duration-200 hover:shadow-lg">
          Explore Now
        </button>
        <button className=" button-large-padding flex items-center justify-center rounded-full border-2 border-dark-blue text-[16px] font-semibold text-dark-blue transition duration-200 hover:shadow-lg">
          View Intro <BiPlayCircle className=" ml-2" />
        </button>
      </div>

      {/* Additional Backgrounds */}
      <div className=" absolute -bottom-7 right-0 h-[635px] w-[782px] rotate-[160deg] rounded-[99px] bg-hero" />
    </div>
  );
}

export default AdoptionLeft;
