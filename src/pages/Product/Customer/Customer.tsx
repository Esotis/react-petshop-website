import { customers } from "../../../constant/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Customer() {
  return (
    <section className=" flex justify-center pl-4 pt-12 sm:pl-6 md:pl-10 lg:pl-16 1200:pl-0">
      <div className=" 1200:max-w-[1004px]">
        <h2 className=" text-[24px] font-bold text-dark-blue ">
          Our lovely cutomer
        </h2>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          spaceBetween={14}
          slidesPerView={"auto"}
          modules={[Pagination]}
          className="mySwiper pt-5"
        >
          {customers.map((customer, index) => (
            <SwiperSlide key={index} className="w-auto">
              <img
                src={customer}
                className=" rounded-[10px] object-cover"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Customer;
