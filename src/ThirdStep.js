import React from "react";
import JourneyDetails from "./JourneyDetails";
import BidDetails from "./BidDetails";
import "./ThirdStep.css";
import { useStateValue } from "./StateProvider";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import OTP from "./OTP";

function ThirdStep(props) {
  const [{ mobile }, dispatch] = useStateValue();

  return (
    <div className="ThirdStep">
      <div className="ThirdStep__stepHeader">
        <h1>Verify OTP({props.step}/4 step)</h1>
      </div>
      <div className="ThirdStep__Bid">
        <JourneyDetails />
        <BidDetails />
        <p>
          We've sent an OTP to your mobile number, Please enter it below to
          submit your bid <strong>{mobile} </strong>
          <Link
            to="./second2"
            style={{ color: "#0f53fb", textDecoration: "none" }}
          >
            <EditIcon />
            Edit
          </Link>
        </p>
        <OTP />
      </div>
    </div>
  );
}

export default ThirdStep;
