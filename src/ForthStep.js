import React from "react";
import JourneyDetails from "./JourneyDetails";
import BidDetails from "./BidDetails";
import "./ForthStep.css";

function ForthStep(props) {
  return (
    <div className="ForthStep">
      <div className="ForthStep__stepHeader">
        <h1>Summary and Submit Bid({props.step}/4 step)</h1>
      </div>
      <div className="ForthStep__Bid">
        <JourneyDetails />
        <BidDetails />
        <button
          onClick={(e) => {
            alert("Thanks! Your Bid has been submitted 👏✌");
          }}
        >
          Submit Bid
        </button>
      </div>
    </div>
  );
}

export default ForthStep;
