import { FaCaretDown, FaFilter } from "react-icons/fa";

function Sort() {
  return (
    <div className=" flex justify-between">
      <button className=" flex items-center gap-3 rounded-[20px] border-2 border-neutral-20 px-3 py-[6px] text-[14px] font-semibold text-neutral-60 transition duration-200 hover:shadow-lg">
        Sort by: Popular <FaCaretDown />
      </button>

      <div className=" flex cursor-pointer items-center gap-2 font-bold text-dark-blue-80">
        <FaFilter />
        Filter
      </div>
    </div>
  );
}

export default Sort;
