import "./ToggleSwitch.scss";

const ToggleSwitch = ({ value, onSwitch, circle }) => {
  return (
    // <div className="switch" >
    //   {/* <div className="left">Monthly</div> */}

    //   <input
    //     type="checkbox"
    //     // className="reactSwitchCheckbox"
    //     // name="toggleSwitch"
    //     // id="toggleSwitch"
    //   /> 

    //   <span className="slider"></span> 
    //   {/* <div className="right">Yearly</div> */}
    // </div>

    <div>
    <label className="toggle-button">
      <input type="checkbox" checked={value} onChange={onSwitch} />
      <span className={`toggle-btn ${circle ? "circle" : ""}`}></span>
    </label>
  </div>
  );
};

export default ToggleSwitch;



