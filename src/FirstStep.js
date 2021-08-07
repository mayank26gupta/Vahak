import React from "react";
import "./FirstStep.css";
import FirstForm from "./FirstForm";

function FirstStep(props) {
  return (
    <div className="firstStep">
      <div className="firstStep__stepHeader">
        <h1>Place your Bid({props.step}/4 step)</h1>
      </div>
      {/* Forms */}
      <div className="firstForm">
        <FirstForm />
      </div>
    </div>
  );
}

export default FirstStep;
