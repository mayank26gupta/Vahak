import React from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import EditIcon from "@material-ui/icons/Edit";
import "./JourneyDetails.css";
import { Link } from "react-router-dom";

function JourneyDetails() {
  const [{ details }, dispatch] = useStateValue();
  return (
    <div className="JourneyDetails">
      <div className="JourneyDetails_info">
        <small>JOURNEY DETAILS</small>
        <p>
          {details?.sourceLocation} - {details?.destination}
        </p>
        <p>
          {details?.numberOfTravellers} persons, {details?.enterCarType}
        </p>
      </div>
      <Link to="/" className="edit">
        <span>
          <EditIcon classname="editIcon" />
          Edit
        </span>
      </Link>
    </div>
  );
}

export default JourneyDetails;
