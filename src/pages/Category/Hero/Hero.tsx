import { FaCaretRight } from "react-icons/fa";
import Navbar2 from "../../../components/Navbar2";
import Banner from "./Banner";

function Hero() {
  return (
    <>
      <Navbar2 />

      {/* Position */}
      <div className=" section mt-5 flex items-center gap-2 text-[14px] font-semibold text-neutral-60">
        <span className=" inline-block ">Home</span>
        <FaCaretRight className=" " />
        <span className=" inline-block ">Dog</span>
        <FaCaretRight className=" " />
        <span className=" inline-block ">Small Dog</span>
      </div>

      {/* Banner */}
      <Banner />
    </>
  );
}

export default Hero;
