import Card from "./Card";
import Heading from "./Heading";

function Puppies() {
  return (
    <>
      <section className=" section pt-10 1200:flex 1200:justify-center 1200:px-0 1200:pt-14">
        <div className=" max-w-[1200]">
          <Heading />
          <Card />
        </div>
      </section>
    </>
  );
}

export default Puppies;
