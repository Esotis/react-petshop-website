import Dogs from "./Dogs";
import LeftFilter from "./LeftFilter";
import Sort from "./Sort";

function Filter() {
  return (
    <section className=" section grid grid-cols-1 gap-4 pt-6 lg:grid-cols-max-1fr">
      <div className=" lg:order-2" >
        <Sort />
        <Dogs />
      </div>

      {/* Filter show when large screen */}
      <LeftFilter  />
    </section>
  );
}

export default Filter;
