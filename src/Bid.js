import React, { useState } from "react";
import { useFormik } from "formik";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router";
import "./Bid.css";

function Bid() {
  const [state, dispatch] = useStateValue();
  const { bid } = state;
  const history = useHistory();

  const formik = useFormik({
    initialValues: { bidPrice: bid ? bid : "", negotiable: "" },
    onSubmit: (values) => {
      dispatch({
        type: "ADD_BidPrice",
        bid: values.bidPrice,
        negotiable: values.negotiable,
      });
      history.push("./second2");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bid">
      <div className="form_group">
        <label for="bidPrice" className="currency_icon">
          ₹
        </label>
        <input
          className="price"
          type="number"
          min="0"
          max="100000"
          name="bidPrice"
          id="bidPrice"
          placeholder="0"
          onChange={formik.handleChange}
          value={formik.values.bidPrice}
        ></input>
      </div>
      <span className="form_checkbox">
        <input
          type="checkbox"
          name="negotiable"
          id="negotiable"
          onChange={formik.handleChange}
          value={formik.values.negotiable}
        ></input>
        <label for="negotiable"> Rate Negotiable</label>
      </span>
      <button
        className="button_next"
        style={{
          background: !formik.values.bidPrice ? "lightgrey" : "#0f53fb",
        }}
        disabled={!formik.values.bidPrice ? "true" : ""}
      >
        Next
      </button>
    </form>
  );
}

export default Bid;
