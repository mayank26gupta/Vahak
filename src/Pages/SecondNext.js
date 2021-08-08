import React from "react";
import "./SecondStep.css";
import JourneyDetails from "../Components/JourneyDetails";
import PersonalDetails from "../Components/PersonalDetails";

function SecondNext(props) {
  return (
    <div className="SecondStep">
      <div className="SecondStep__stepHeader">
        <h1>Place your Bid({props.step}/4 step)</h1>
      </div>
      <div className="SecondStep__Bid">
        <JourneyDetails />
        <PersonalDetails />
      </div>
    </div>
  );
}

export default SecondNext;
