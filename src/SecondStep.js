import React from "react";
import "./SecondStep.css";
import JourneyDetails from "./JourneyDetails";
import Bid from "./Bid";

function SecondStep(props) {
  return (
    <div className="SecondStep">
      <div className="SecondStep__stepHeader">
        <h1>Place your Bid({props.step}/4 step)</h1>
      </div>
      <div className="SecondStep__Bid">
        <JourneyDetails />
        <Bid />
      </div>
    </div>
  );
}

export default SecondStep;
