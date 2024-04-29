import Bottom from "./Bottom";
import Register from "./Register";

function Footer() {
  return (
    <section className=" pt-10 ">
      <div className=" flex rounded-tl-[20px] rounded-tr-[20px] bg-hero px-4 pt-10 pb-4 sm:px-6 md:items-center md:justify-center">
        <div className=" w-full lg:max-w-[1180px]">
          <Register />
          <Bottom />
        </div>
      </div>
    </section>
  );
}

export default Footer;
