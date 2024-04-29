import image from "../../../assets/adoption-right-image.png";

function AdoptionRight() {
  return (
    <div className=" relative flex items-center justify-center">
      <img
        src={image}
        className=" z-10 h-[358px] w-[538px] object-cover"
        alt=""
      />

      <div className=" absolute -bottom-[610px] -left-32 h-[787px] w-[897px] -rotate-[30deg] rounded-[99px] bg-hero/[0.3] xl:-bottom-[630px] xl:left-4" />
    </div>
  );
}

export default AdoptionRight;
