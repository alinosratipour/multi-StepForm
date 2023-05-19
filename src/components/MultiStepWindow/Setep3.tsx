import { boolean } from "zod";

interface Setep3Props {
  planType: string;
  toggleState:boolean;
  
}

const Setep3: React.FC<Setep3Props> = ({ planType }) => {
  const addOns = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ];
console.log("step3",planType);

  return (
    <div className="title">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="add-on-container">
        {addOns.map((item) => {
          const price =
            planType === "monthly" ? item.price.monthly : item.price.yearly;
          const formattedPrice =
            planType === "monthly" ? `+$${price}/mo` : `+$${price}/yr`;
          return (
            <div className="add-on-box">
              <div className="add-on-contents">
                <div className="checkbox-container">
                  <label className="custom-checkbox">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>

                <div className="name-and-desciption">
                  <span className="add-on-name">{item.name}</span>
                  <span className="add-on-desciption">{item.description}</span>
                </div>

                <span className="add-on-price">{formattedPrice}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Setep3;
