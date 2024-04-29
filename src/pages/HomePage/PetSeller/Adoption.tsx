import AdoptionLeft from "./AdoptionLeft";
import AdoptionRight from "./AdoptionRight";

function Adoption() {
  return (
    <div className=" mt-5 hidden grid-cols-2 overflow-hidden rounded-md bg-adoption lg:grid">
      <AdoptionLeft />
      <AdoptionRight />
    </div>
  );
}

export default Adoption;
