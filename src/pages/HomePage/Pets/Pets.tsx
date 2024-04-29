import { FaArrowRight } from "react-icons/fa";
import Heading from "./Heading";
import PetItems from "./PetItems";

function Pets() {
  return (
    <>
      <section className=" section relative z-10 bg-white pt-8">
        <Heading />
        <PetItems />
        {/* View More Button when viewport is small */}
        <button className=" mt-6 flex w-full items-center justify-center gap-2 rounded-[57px] border-2 border-dark-blue py-[10px] text-center font-semibold text-dark-blue transition duration-200 hover:shadow-lg  min-[520px]:mx-auto min-[520px]:max-w-[80%] sm:hidden">
          View more
          <FaArrowRight className=" translate-y-[2px] text-[14px] font-semibold" />
        </button>
      </section>
    </>
  );
}

export default Pets;
