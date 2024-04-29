import { FaArrowRight } from "react-icons/fa";
import { sellerImages } from "../../../constant/image";

function Seller() {
  return (
    <>
      <div className=" flex items-center justify-between">
        <h2 className=" text-base font-semibold">
          Proud to be part of{" "}
          <span className=" text-[24px] font-bold text-dark-blue">
            Pet Sellers
          </span>
        </h2>
        <button className=" button-large-padding hidden items-center justify-center gap-2 rounded-full border-2 border-dark-blue text-[16px] font-semibold text-dark-blue transition duration-200 hover:shadow-lg sm:flex">
          View all our sellers{" "}
          <FaArrowRight className=" translate-y-[1px] text-[14px] font-semibold" />
        </button>
      </div>
      <div className=" mt-4 flex flex-wrap items-center justify-center gap-[20px]">
        {sellerImages.map((image, index) => (
          <div className=" flex w-[150px] justify-center" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Seller;
