import { BiShareAlt } from "react-icons/bi";
import Guarantee1 from "../../../assets/guarantee-1.png";
import Guarantee2 from "../../../assets/guarantee-2.png";
import { details } from "../../../constant/constant";

function Information() {
  return (
    <div className=" mt-5">
      {/* Heading */}
      <div className=" section flex items-center justify-between min-[1200px]:hidden ">
        <h3 className=" text-[18px] font-bold text-neutral-100">Information</h3>
        <div className=" flex items-center gap-2 text-[14px] font-bold text-dark-blue-80">
          <BiShareAlt className=" cursor-pointer stroke-[0.5px] text-[20px]" />
          Share
        </div>
      </div>

      {/* Details */}
      <div className=" mt-5 pl-4 font-semibold sm:pl-6 md:pl-10 lg:pl-16 1200:p-0">
        {details.map((detail, index) => (
          <div
            className=" grid grid-cols-2 border-b-2 border-neutral-10 py-2 text-neutral-60 "
            key={index}
          >
            <div className=" px-3 text-[14px]">{detail.key}</div>
            <div className=" max-w-[180px] text-[14px] ">: {detail.value}</div>
          </div>
        ))}
      </div>

      {/* Guarantees */}
      <div className=" section mt-4 text-[14px] font-bold text-dark-blue-80 min-[1200px]:hidden">
        <div className=" rounded-[10px] bg-hero px-3 py-[14px] ">
          <div className=" flex items-center gap-2">
            <img src={Guarantee1} className=" object-cover" alt="" />
            100% health guarantee for pets
          </div>
          <div className=" mt-3 flex items-center gap-[5px]">
            <img src={Guarantee2} className=" object-cover" alt="" />
            100% guarantee of pet identification
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
