import { knowledges } from "../../../constant/constant";

function Knowledge() {
  return (
    <div className=" mt-3 grid grid-cols-1 justify-around gap-6 min-[412px]:grid-cols-1-380px min-[780px]:grid-cols-2-380px min-[780px]:gap-4 xl:grid-cols-3-380px">
      {knowledges.map((knowledge, index) => (
        <div
          className=" cursor-pointer overflow-hidden rounded-md px-2 pt-2 pb-3 shadow-lg transition duration-300 sm:max-[779px]:hover:scale-110 xl:hover:scale-110"
          key={index}
        >
          <img
            src={knowledge.image}
            className=" rounded-md object-cover"
            alt=""
          />
          <button className=" mt-3 rounded-[28px] bg-blue-sea px-[10px] py-[2px] text-[10px] font-semibold text-white">
            Pet knowledge
          </button>
          <h2 className=" mt-2 text-base font-bold text-dark-blue ">
            {knowledge.heading}
          </h2>
          <p className=" mt-2 text-ellipsis text-[14px] text-dark-blue-80">
            {knowledge.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Knowledge;
