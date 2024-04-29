import { pets } from "../../../constant/constant";

function PetItems() {
  return (
    <div className=" card-container">
      {pets.map((pet, index) => (
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
      ))}
    </div>
  );
}

export default PetItems;
