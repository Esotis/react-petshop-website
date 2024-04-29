import GiftSVG from "../../../assets/gift";
import { products } from "../../../constant/constant";

function Items() {
  return (
    <div className=" card-container">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <img src={product.image} className=" card-img" alt="" />
          <h2 className=" card-name max-w-[220px]">{product.name}</h2>
          <div className=" card-description-container">
            <div className=" card-description">
              Product: <span className=" font-bold">{product.product}</span>
            </div>
            {/* If Product size is available then show dot and size */}
            {product.size && (
              <>
                <div className=" card-dot" />
                <div className=" card-description">
                  Size: <span className=" font-bold">{product.size}</span>
                </div>
              </>
            )}
          </div>
          <span className=" card-price">{product.price}</span>
          <div className=" mt-2 flex items-center gap-2 rounded-lg bg-hero px-[10px] py-2">
            {GiftSVG}
            <div className=" h-1 w-1 rounded-full bg-dark-blue" />
            <span className=" inline-block text-[14px] font-bold text-dark-blue-80">
              {product.promo}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
