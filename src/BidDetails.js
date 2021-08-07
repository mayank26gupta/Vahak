import React from "react";
import { useStateValue } from "./StateProvider";
import "./BidDetails.css";

function BidDetails() {
  const [{ mobile, name, remarks, bid, negotiable }, dispatch] =
    useStateValue();

  return (
    <div className="BidDetails">
      <div className="BidDetails_info">
        <small>BID DETAILS</small>
        <p>+91-{mobile}</p>
        <p>{name}</p>
        <p>{remarks}</p>
      </div>
      <span className="bid_price">
        <h1>₹ {bid}</h1>
        <p>{negotiable ? "Negotiable" : "Fixed Price"}</p>
      </span>
    </div>
  );
}

export default BidDetails;
