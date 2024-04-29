import { FaCaretDown } from "react-icons/fa";
import { dogs } from "../../../constant/constant";
import Pagination from "./Pagination";

function Dogs() {
  return (
    <div className=" mt-4">
      {/* Heading */}
      <div className=" flex items-center justify-between">
        <h2 className=" text-[24px] font-bold text-dark-blue ">
          Small Dog{" "}
          <span className=" ml-1 mt-auto inline-block text-[14px] font-semibold text-neutral-60">
            52 puppies
          </span>
        </h2>
        <button className=" hidden items-center gap-3 rounded-[20px] border-2 border-neutral-20 px-3 py-[6px] text-[14px] font-semibold text-neutral-60 transition duration-200 hover:shadow-lg lg:flex ">
          Sort by: Popular <FaCaretDown />
        </button>
      </div>

      {/* Item Cards and Pagination*/}

      <div className=" flex flex-wrap justify-center gap-8">
        <div className=" mt-8 grid w-full grid-cols-2-185px justify-around gap-4 sm:grid-cols-2-280px lg:grid-cols-2-280px xl:grid-cols-3-280px">
          {dogs.map((dog, index) => (
            <div className=" card" key={index}>
              <img src={dog.image} className=" card-img" alt="" />
              <h3 className=" card-name">{dog.name}</h3>
              <div className=" card-description-container">
                <div className=" card-description">
                  Gene: <span className="  font-bold">{dog.gene}</span>
                </div>
                <div className=" card-dot"></div>
                <div className=" card-description">
                  Age: <span className="  font-bold">{dog.age}</span>
                </div>
              </div>
              <span className=" card-price">{dog.price}</span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
}

export default Dogs;
