import React from "react";
import "./FirstStep.css";
import JourneyDetailsForm from "../Components/JourneyDetailsForm";

function FirstStep(props) {
  return (
    <div className="firstStep">
      <div className="firstStep__stepHeader">
        <h1>Place your Bid({props.step}/4 step)</h1>
      </div>
      <div className="JourneyDetailsForm">
        <JourneyDetailsForm />
      </div>
    </div>
  );
}

export default FirstStep;
