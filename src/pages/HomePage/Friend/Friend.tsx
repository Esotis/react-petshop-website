import Left from "./Left";
import Right from "./Right";

function Friend() {
  return (
    <section className=" section bg-white pt-8 ">
      {/* container to hidden the overflow additional background */}
      <div className="grid grid-cols-1 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] md:grid-cols-2">
        <Right />
        <Left />
      </div>
    </section>
  );
}

export default Friend;
