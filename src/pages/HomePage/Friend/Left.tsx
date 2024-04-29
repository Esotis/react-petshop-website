import Banner from "../../../assets/friend-banner.png";

function Left() {
  return (
    <div className="  relative flex w-full justify-center bg-dark-blue md:-order-1 md:pt-8">
      <img src={Banner} className=" z-10 object-cover" alt="" />

      {/* Additional Background */}
      <div className=" absolute -left-[190px] -bottom-[620px] h-[787px] w-[787px] rotate-[28deg] rounded-[99px] bg-dark-blue-80" />
    </div>
  );
}

export default Left;
