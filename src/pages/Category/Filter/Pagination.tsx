import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination() {
  return (
    <div className=" flex gap-3 text-[18px] font-bold text-dark-blue-80">
      <span className="  flex cursor-pointer items-center rounded-lg px-[13px] py-[4px] text-base transition duration-300 hover:bg-dark-blue hover:text-white">
        <FaArrowLeft />
      </span>
      <span className="  flex cursor-pointer items-center rounded-lg px-[13px] py-[4px] transition duration-300 hover:bg-dark-blue hover:text-white">
        1
      </span>
      <span className="  flex cursor-pointer items-center rounded-lg px-[13px] py-[4px] transition duration-300 hover:bg-dark-blue hover:text-white">
        2
      </span>
      <span className="  flex cursor-pointer items-center rounded-lg px-[13px] py-[4px] transition duration-300 hover:bg-dark-blue hover:text-white">
        3
      </span>
      <span className="  flex cursor-pointer items-center rounded-lg px-[13px] py-[4px] transition duration-300 hover:bg-dark-blue hover:text-white">
        ...
      </span>
      <span className="  flex cursor-pointer items-center rounded-lg px-[13px] py-[4px] transition duration-300 hover:bg-dark-blue hover:text-white">
        28
      </span>
      <span className="  flex cursor-pointer items-center rounded-lg px-[13px] py-[4px] text-base transition duration-300 hover:bg-dark-blue hover:text-white  ">
        <FaArrowRight />
      </span>
    </div>
  );
}

export default Pagination;
