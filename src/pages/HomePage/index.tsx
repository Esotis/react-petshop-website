import Footer from "../../components/Footer/Footer";
import Friend from "./Friend/Friend";
import Hero from "./Hero/Hero";
import PetKnowledge from "./PetKnowledge/PetKnowledge";
import Pets from "./Pets/Pets";
import PetSeller from "./PetSeller/PetSeller";
import Product from "./Product/Product";

function index() {
  return (
    <>
      <Hero />
      <Pets />
      <Friend />
      <Product />
      <PetSeller />
      <PetKnowledge />
      <Footer />
    </>
  );
}

export default index;
