import React, { useState } from "react";
import { useFormik } from "formik";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router";
import "./PersonalDetails.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import * as Yup from "yup";
import "yup-phone";

function PersonalDetails() {
  const [state, dispatch] = useStateValue();
  const { bid, negotiable, mobile, name, remarks } = state;
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      bidPrice: bid ? bid : "",
      negotiable: negotiable ? true : false,
      mobile: mobile ? mobile : "",
      name: name ? name : "",
      remarks: remarks ? remarks : "",
    },
    onSubmit: (values) => {
      dispatch({
        type: "ADD_PersonalDetails",
        negotiable: values.negotiable,
        mobile: values.mobile,
        name: values.name,
        remarks: values.remarks,
      });
      history.push("./third");
    },
    validationSchema: Yup.object({
      mobile: Yup.string().phone().required("Mobile Required"),
      name: Yup.string().required("Required"),
    }),
  });

  return (
    <div className="info_container">
      <form onSubmit={formik.handleSubmit} className="info">
        <div className="bid">
          <div className="form_group">
            <label for="bidPrice" className="currency_icon">
              ₹
            </label>
            <span className="price">{bid}</span>
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
        </div>

        <div className="personal_details">
          <div className="personal_details__formGroup">
            <input
              id="mobile"
              name="mobile"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
            />
            <label htmlFor="mobile">Enter your 10 digits Mobile number</label>
            {formik.touched.mobile && formik.errors.mobile ? (
              <div className="errors_mob">{formik.errors.mobile}</div>
            ) : null}
          </div>
          <div className="whatsapp_update">
            <input id="whatsapp" type="checkbox"></input>
            <label for="whatsapp">
              Get updates on <WhatsAppIcon className="whatsapp__icon" />{" "}
              <span style={{ color: "#40C351" }}>Whatsapp</span>
            </label>
          </div>

          <div className="personal_details__formGroup">
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <label htmlFor="name">Enter your Name *</label>
            {formik.touched.name && formik.errors.name ? (
              <div className="errors">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="personal_details__formGroup">
            <input
              id="remarks"
              name="remarks"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.remarks}
            />
            <label htmlFor="remarks">Enter remarks (Optional)</label>
          </div>
          <button className="button_verifyOTP" type="submit">
            Verify via OTP
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
