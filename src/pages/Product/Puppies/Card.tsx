import { useState } from "react";
import { pets } from "../../../constant/constant";

function Card() {
  const [largeScreen, setLargeScreen] = useState<number>(5);

  // jika berada di breakpoint XL (1280), maka hanya tampilkan 4 cards
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1280) return setLargeScreen(3);
    setLargeScreen(5);
  });

  document.addEventListener("readystatechange", () => {
    if (window.innerWidth >= 1280) setLargeScreen(3);
  });

  return (
    <div className=" card-container">
      {pets.map((pet, index) => {
        // Skip 2 last pets
        if (index > largeScreen) return;
        return (
          <div className=" card" key={index}>
            <img src={pet.image} className=" card-img" alt="" />
            <h3 className=" card-name">{pet.name}</h3>
            <div className=" card-description-container">
              <div className=" card-description">
                Gene: <span className="  font-bold">{pet.gene}</span>
              </div>
              <div className=" card-dot"></div>
              <div className=" card-description">
                Age: <span className="  font-bold">{pet.age}</span>
              </div>
            </div>
            <span className=" card-price">{pet.price}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
