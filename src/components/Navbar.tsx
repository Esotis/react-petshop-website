import { useRef } from "react";
import { BiCaretDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProfileIcon from "../assets/Frame-1";
import Monito from "../assets/monito.png";

function Navbar() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center justify-between gap-6 px-4 pt-6 sm:px-6 md:px-10 md:pt-8 lg:px-16 xl:justify-center">
      <BiMenu className=" z-10 cursor-pointer text-[30px] opacity-80 hover:opacity-100 xl:hidden" />
      {/* Monito */}
      <div className=" flex items-center gap-[48px]">
        <div className=" relative flex flex-col items-center justify-center">
          <img src={Monito} className=" z-10 block" alt="" />
          <span className=" z-10 text-[10px] font-semibold text-dark-blue">
            Pets for Best
          </span>

          {/* Additional Backgrounds */}
          <div className=" absolute bottom-[85%] -right-[100%] h-[500px]  w-[500px] rotate-[20deg] rounded-[60px] bg-moon-yellow" />
        </div>

        {/* Navigation */}
        <ul className=" hidden gap-[48px] xl:flex">
          <Link
            to={"/"}
            className=" cursor-pointer font-bold text-dark-blue opacity-90 hover:opacity-100 "
          >
            Home
          </Link>
          <Link
            to={"/category"}
            className=" cursor-pointer font-bold text-dark-blue opacity-90 hover:opacity-100 "
          >
            Category
          </Link>
          <Link
            to={"/"}
            className=" cursor-pointer font-bold text-dark-blue opacity-90 hover:opacity-100 "
          >
            About
          </Link>
          <Link
            to="/"
            className=" cursor-pointer font-bold text-dark-blue opacity-90 hover:opacity-100 "
          >
            Contact
          </Link>
        </ul>
      </div>

      {/* 2 BUttons and Profile */}
      <div className="  hidden items-center gap-[14px] xl:flex">
        <div className=" flex items-center gap-2 rounded-full bg-white px-4 py-[12px]">
          <BiSearch
            className=" text-xl text-slate-500"
            onClick={() => input.current?.focus()}
          />

          <input
            type="text"
            className=" outline-none "
            placeholder="Search something here!"
            id="search"
            ref={input}
          />
        </div>

        <button className=" button-large-padding rounded-full border-2 border-dark-blue bg-dark-blue text-[16px] text-white transition duration-200 hover:shadow-lg">
          Join the community
        </button>

        <div className=" flex items-center gap-1">
          {ProfileIcon}
          <span className=" font-bold text-dark-blue">VND</span>
          <BiCaretDown className=" cursor-pointer text-base text-dark-blue" />
        </div>
      </div>

      <BiSearch className=" cursor-pointer text-[30px] opacity-80 hover:opacity-100 xl:hidden" />
    </div>
  );
}

export default Navbar;
