import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Monito from "../../assets/monito-footer.png";

function Bottom() {
  return (
    <>
      <div className=" mt-10 border-b-2 border-neutral-20">
        <div className=" flex flex-col gap-6 md:flex-row md:justify-between">
          {/* Nav */}
          <div className=" flex justify-between font-semibold text-dark-blue min-[480px]:justify-center min-[480px]:gap-[40px]">
            <Link to={"/"}>Home</Link>
            <Link to="/category">Category</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
          {/* Social Media */}
          <div className=" mb-10 flex justify-center gap-[40px] text-[20px] text-dark-blue">
            <FaFacebook className=" cursor-pointer" />
            <FaTwitter className=" cursor-pointer" />
            <FaInstagram className=" cursor-pointer" />
            <FaYoutube className=" cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Logo and Policy */}
      <div className=" mt-6 grid grid-cols-1-max-content items-center justify-center justify-items-center md:w-full md:grid-cols-3-max-content md:justify-between">
        <img src={Monito} className=" md:order-2" alt="" />

        <div className=" mt-6 text-[12px] font-semibold text-neutral-60 md:order-3 md:mt-0">
          <span className=" inline-block ">Terms of Service </span>
          <span className=" ml-3 inline-block ">Privacy Policy </span>
        </div>
        <span className=" mt-2 inline-block text-[10px] text-neutral-60 md:order-1 md:mt-0">
          © 2022 Monito. All rights reserved.
        </span>
      </div>
    </>
  );
}

export default Bottom;
