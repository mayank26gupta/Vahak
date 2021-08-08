import { useFormik } from "formik";
import "./JourneyDetailsForm.css";
import { useStateValue } from "../ContextAPI/StateProvider";
import { useHistory } from "react-router";
import * as Yup from "yup";

function JourneyDetailsForm() {
  const [state, dispatch] = useStateValue();
  const { details } = state;
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      sourceLocation: details ? details.sourceLocation : "",
      destination: details ? details.destination : "",
      enterCarType: details ? details.enterCarType : "",
      numberOfTravellers: details ? details.numberOfTravellers : "",
    },
    onSubmit: (values) => {
      dispatch({
        type: "ADD_Details",
        details: values,
      });

      history.push("./second");
    },
    validationSchema: Yup.object({
      sourceLocation: Yup.string().required("Required"),
      destination: Yup.string().required("Required"),
      enterCarType: Yup.string().required("Required"),

      numberOfTravellers: Yup.number().when("enterCarType", {
        is: (enterCarType) => {
          return enterCarType === "SUV" ? true : false;
        },
        then: Yup.number().max(6, "Max Pax 6 allowed").required("Required"),
        otherwise: Yup.number()
          .max(4, "Max Pax 4 allowed")
          .required("Required"),
      }),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="JourneyDetailsForm_form">
      <span className="form__group">
        <input
          id="sourceLocation"
          name="sourceLocation"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sourceLocation}
        />
        <label htmlFor="sourceLocation">Source Location *</label>
        {formik.touched.sourceLocation && formik.errors.sourceLocation ? (
          <div className="errors">{formik.errors.sourceLocation}</div>
        ) : null}
      </span>
      <span className="form__group">
        <input
          id="destination"
          name="destination"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.destination}
        />
        <label htmlFor="destination">Destination *</label>
        {formik.touched.destination && formik.errors.destination ? (
          <div className="errors">{formik.errors.destination}</div>
        ) : null}
      </span>
      <div className="form__group">
        <select
          name="enterCarType"
          id="enterCarType"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.enterCarType}
        >
          <option value="" disabled selected hidden></option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </select>
        <label htmlFor="enterCarType">Enter Car Type *</label>
        {formik.touched.enterCarType && formik.errors.enterCarType ? (
          <div className="errors">{formik.errors.enterCarType}</div>
        ) : null}
      </div>
      <div className="form__group">
        <input
          id="numberOfTravellers"
          name="numberOfTravellers"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.numberOfTravellers}
        />
        <label htmlFor="numberOfTravellers">Number Of Travellers</label>
        {formik.touched.numberOfTravellers &&
        formik.errors.numberOfTravellers ? (
          <div className="errors">{formik.errors.numberOfTravellers}</div>
        ) : null}
      </div>
      <button type="submit">Enter Bid details</button>
    </form>
  );
}

export default JourneyDetailsForm;
