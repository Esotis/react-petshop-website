import Navbar from "../../../components/Navbar";
import MainDisplay from "./MainDisplay";

function Hero() {
  return (
    <section className="bg-hero xl:rounded-bl-[40px] xl:rounded-br-[40px]">
      <Navbar />
      <MainDisplay />
    </section>
  );
}

export default Hero;
