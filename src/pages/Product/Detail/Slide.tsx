import { useState } from "react";
import { BiCaretLeft, BiCaretRight, BiInfoCircle } from "react-icons/bi";
import DogMain from "../../../assets/main-dog.jpg";
import DogSecond from "../../../assets/second-dog.jpg";

function Slide() {
  const [largeScreen, setLargeScreen] = useState<boolean>(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) return setLargeScreen(true);
    setLargeScreen(false);
  });

  document.addEventListener("readystatechange", () => {
    if (window.innerWidth >= 1200) setLargeScreen(true);
  });

  return (
    <>
      <div className=" relative flex max-h-[523px] justify-center bg-moon-yellow ">
        <img
          src={largeScreen ? DogSecond : DogMain}
          className=" object-cover"
          alt=""
        />
        <div className=" absolute left-0 top-[47px] flex w-full items-center justify-between px-3 1200:hidden">
          <BiCaretLeft className=" cursor-pointer text-[30px] text-white " />
          <BiInfoCircle className="cursor-pointer  text-[30px] text-white " />
        </div>
        <div className=" absolute left-0 top-[273px] flex w-full items-center justify-between px-3 1200:top-1/2 1200:-translate-y-1/2">
          <div className=" flex h-[42px] w-[42px] items-center justify-center rounded-[20px] bg-white/40">
            <BiCaretLeft className=" cursor-pointer  text-[32px] text-white" />
          </div>
          <div className=" flex h-[42px] w-[42px] items-center justify-center rounded-[20px] bg-white/40">
            <BiCaretRight className="cursor-pointer  text-[32px] text-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
