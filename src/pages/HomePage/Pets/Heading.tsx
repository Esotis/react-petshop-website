import { FaArrowRight } from "react-icons/fa";

function Heading() {
  return (
    <>
      <h3 className=" font-semibold">Whats new?</h3>

      <div className="flex justify-between">
        <h2 className=" text-xl font-bold text-dark-blue">
          Take A Look At Some Of Our Pets
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
