import { BiShareAlt } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Guarantee1 from "../../../assets/guarantee-1.png";
import Guarantee2 from "../../../assets/guarantee-2.png";
import { dogs } from "../../../constant/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function SmallSlide() {
  return (
    <>
      <div className=" pl-4 pt-3 ">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={9}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          className="mySwiper"
        >
          {dogs.map((dog, index) => (
            <SwiperSlide className="w-auto" key={index}>
              <img src={dog} className="object-cover" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Guarantess */}
      <div className=" mt-4 hidden text-[14px] font-bold text-dark-blue-80 1200:block">
        <div className=" flex items-center gap-3 rounded-[10px] bg-hero py-[14px] px-3">
          <div className=" flex items-center gap-2">
            <img src={Guarantee1} className=" object-cover" alt="" />
            100% health guarantee for pets
          </div>
          <div className="flex items-center gap-[5px]">
            <img src={Guarantee2} className=" object-cover" alt="" />
            100% guarantee of pet identification
          </div>
        </div>
      </div>

      {/* Social Media */}

      <div className=" mt-5 flex items-center gap-[21px] px-[10px]">
        <div className=" flex items-center gap-2 text-[14px] font-bold text-dark-blue-80">
          <BiShareAlt className=" cursor-pointer stroke-[0.5px] text-[20px]" />
          Share
        </div>

        <div className=" flex gap-4 text-[19px] text-neutral-40">
          <FaFacebook className=" cursor-pointer" />
          <FaTwitter className=" cursor-pointer" />
          <FaInstagram className=" cursor-pointer" />
          <FaYoutube className=" cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default SmallSlide;
