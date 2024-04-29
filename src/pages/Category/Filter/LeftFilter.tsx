import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function LeftFilter() {
  return (
    <div className=" hidden lg:order-1 lg:block">
      <h2 className=" text-[24px] font-bold text-dark-blue ">Filter</h2>

      {/* Gender */}
      <div className=" border-b-2 border-neutral-10 pt-5 pb-4 text-neutral-100">
        <h3 className=" font-bold ">Gender</h3>
        <div className=" filter-input-box">
          <div className=" filter-input-container">
            <input type="checkbox" id="male" className=" filter-checkbox" />
            <label className=" filter-label" htmlFor="#male">
              Male
            </label>
          </div>
          <div className=" filter-input-container">
            <input type="checkbox" id="Female" className=" filter-checkbox" />
            <label className=" filter-label" htmlFor="#Female">
              Female
            </label>
          </div>
        </div>
      </div>

      {/* Color */}
      <div className=" filter-container ">
        <h3 className=" font-bold">Color</h3>
        <div className=" filter-input-box">
          <div className=" filter-input-container">
            <input className=" filter-checkbox" type="checkbox" id=" red" />{" "}
            <div className=" filter-circle-color bg-[#FF564F]" />{" "}
            <label htmlFor="#red" className=" filter-label">
              Red
            </label>
          </div>

          <div className=" filter-input-container">
            <input className=" filter-checkbox" type="checkbox" id=" apricot" />{" "}
            <div className=" filter-circle-color bg-[#FFB672]" />{" "}
            <label htmlFor="#apricot" className=" filter-label">
              Apricot
            </label>
          </div>
          <div className=" filter-input-container">
            <input className=" filter-checkbox" type="checkbox" id=" black" />{" "}
            <div className=" filter-circle-color bg-black" />{" "}
            <label htmlFor="#black" className=" filter-label">
              Black
            </label>
          </div>
          <div className=" filter-input-container">
            <input
              className=" filter-checkbox"
              type="checkbox"
              id=" blackwhite"
            />{" "}
            <div className=" filter-circle-color flex">
              <div className=" w-1/2 rounded-tl-[10px] rounded-bl-[10px] bg-black" />{" "}
              <div className=" w-1/2 rounded-tr-[10px] rounded-br-[10px] bg-[#CECECE]" />
            </div>
            <label htmlFor="#blackwhite" className=" filter-label">
              Black & White
            </label>
          </div>
          <div className=" filter-input-container">
            <input className=" filter-checkbox" type="checkbox" id=" silver" />{" "}
            <div className=" filter-circle-color bg-[#CECECE]" />{" "}
            <label htmlFor="#silver" className=" filter-label">
              Silver
            </label>
          </div>
          <div className=" filter-input-container">
            <input className=" filter-checkbox" type="checkbox" id=" tan" />{" "}
            <div className=" filter-circle-color bg-[#FFF7CE]" />{" "}
            <label htmlFor="#tan" className=" filter-label">
              Tan
            </label>
          </div>
        </div>
      </div>
      {/* Price */}

      <div className=" filter-container">
        <h3 className=" font-bold">Price</h3>

        <div className=" mt-[10px] flex gap-2 font-semibold">
          <div className=" border-b-2 border-neutral-10 p-[10px]">
            <div className=" flex items-center gap-[78px] text-[14px] text-neutral-80">
              Min{" "}
              <div className=" flex flex-col gap-[1px] ">
                <FaArrowUp className=" text-[7px]" />
                <FaArrowDown className=" text-[7px]" />
              </div>
            </div>
          </div>
          <div className=" border-b-2 border-neutral-10 p-[10px]">
            <div className=" flex gap-[78px] text-[14px] text-neutral-80">
              Max{" "}
              <div className=" flex flex-col gap-[1px] ">
                <FaArrowUp className=" text-[7px]" />
                <FaArrowDown className=" text-[7px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breed */}

      <div className=" filter-container">
        <h3 className=" font-bold">Breed</h3>
        <div className=" filter-input-box">
          <div className=" filter-input-container">
            <input type="checkbox" id="small" className=" filter-checkbox" />
            <span className=" filter-label">Small</span>
          </div>
          <div className=" filter-input-container">
            <input type="checkbox" id="medium" className=" filter-checkbox" />
            <span className=" filter-label">Medium</span>
          </div>
          <div className=" filter-input-container">
            <input type="checkbox" id="large" className=" filter-checkbox" />
            <span className=" filter-label">Large</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftFilter;
