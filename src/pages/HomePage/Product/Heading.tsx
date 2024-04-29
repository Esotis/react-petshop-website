import { FaArrowRight } from "react-icons/fa";

function Heading() {
  return (
    <>
      <h3 className=" font-semibold">
        Hard to choose right products for your pets?
      </h3>
      <div className=" flex items-center justify-between">
        <h2 className=" text-[24px] font-bold text-dark-blue ">Our Products</h2>
        <button className=" button-large-padding hidden items-center justify-center gap-2 rounded-full border-2 border-dark-blue text-[16px] font-semibold text-dark-blue transition duration-200 hover:shadow-lg sm:flex">
          View more{" "}
          <FaArrowRight className=" translate-y-[1px] text-[14px] font-semibold" />
        </button>
      </div>
    </>
  );
}

export default Heading;
