import { BiChat } from "react-icons/bi";
import { FaCaretRight } from "react-icons/fa";
import Information from "./Information";

function Info() {
  return (
    <div className=" relative  z-10 mt-5 max-[1200px]:rounded-tl-[20px] max-[1200px]:rounded-tr-[20px] max-[1200px]:border-x-[1px] max-[1200px]:border-t-[1px] 1200:mt-0 1200:shadow-none">
      {/* Price and Name */}
      <div className=" section relative rounded-tl-[20px] rounded-tr-[20px] pt-8 font-semibold 1200:p-0">
        {/* Nav */}
        <div className=" mb-2 flex items-center gap-2 text-[14px] text-neutral-60">
          <span className=" inline-block">Home</span>
          <FaCaretRight />
          <span className=" inline-block">Dog</span>
          <FaCaretRight />
          <span className=" inline-block">Large Dog</span>
          <FaCaretRight />
          <span className=" inline-block">Shiba Inu Sepia</span>
        </div>

        <h3 className=" mt-4 mb-1 hidden text-[14px] text-neutral-40 1200:block">
          SKU #1000078
        </h3>

        <h2 className=" mb-[2px] text-[24px] font-bold text-neutral-100">
          Shiba Inu Sepia
        </h2>
        <h3 className=" mb-4 text-[20px] font-bold text-dark-blue-80">
          34.000.000 VND
        </h3>

        <div className=" flex flex-col items-start gap-2 font-bold min-[410px]:flex-row">
          <button className=" cursor-pointer rounded-[57px] border-2 border-dark-blue bg-dark-blue px-7 py-[10px] text-white">
            Contact us
          </button>
          <button className=" flex cursor-pointer items-center gap-[10px] rounded-[57px] border-2 border-dark-blue-80 px-7 py-[10px]  text-dark-blue">
            <BiChat className=" text-[24px]" />
            Chat with monito
          </button>
        </div>

        <div className=" absolute top-[10px] left-1/2 h-[6px] w-10 -translate-x-1/2 rounded-[10px] bg-neutral-20 1200:hidden" />
      </div>

      <Information />
    </div>
  );
}

export default Info;
