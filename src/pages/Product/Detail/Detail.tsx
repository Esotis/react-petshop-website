import Info from "./Info";
import Slide from "./Slide";
import SmallSlide from "./SmallSlide";

function Detail() {
  return (
    <>
      <section className=" flex justify-center 1200:mt-7">
        <div className=" w-full gap-[28px] 1200:grid 1200:w-auto 1200:grid-cols-2-max-content 1200:rounded-[20px] 1200:border-2 1200:border-neutral-10 1200:py-[22px] 1200:px-5">
          <div>
            <Slide />
            <SmallSlide />
          </div>
          <Info />
        </div>
      </section>
    </>
  );
}

export default Detail;
