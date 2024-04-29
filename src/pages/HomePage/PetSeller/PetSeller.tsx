import Adoption from "./Adoption";
import Seller from "./Seller";

function PetSeller() {
  return (
    <section className=" section hidden pt-28 md:block">
      <Seller />
      <Adoption />
    </section>
  );
}

export default PetSeller;
