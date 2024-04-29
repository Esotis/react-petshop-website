import { FaArrowRight } from "react-icons/fa";

function Heading() {
  return (
    <>
      <h3 className=" text-[14px] font-semibold">You already know?</h3>
      <div className=" flex justify-between ">
        <h2 className=" text-[20px] font-bold text-dark-blue ">
          Useful Pet Knowledge
        </h2>
        <button className=" button-large-padding hidden items-center justify-center gap-2 rounded-full border-2 border-dark-blue text-[16px] font-semibold text-dark-blue transition duration-200 hover:shadow-lg sm:flex">
          View more{" "}
          <FaArrowRight className=" translate-y-[1px] text-[14px] font-semibold" />
        </button>
      </div>
    </>
  );
}

export default Heading;
