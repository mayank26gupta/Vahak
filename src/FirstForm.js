import { useFormik } from "formik";
import "./FirstForm.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router";

function FirstForm() {
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
  });

  return (
    <form onSubmit={formik.handleSubmit} className="firstStep_form">
      <span className="form__group">
        <input
          id="sourceLocation"
          name="sourceLocation"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.sourceLocation}
          required
        />
        <label htmlFor="sourceLocation">Source Location *</label>
      </span>
      <span className="form__group">
        <input
          id="destination"
          name="destination"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.destination}
        />
        <label htmlFor="destination">Destination *</label>
      </span>
      <div className="form__group">
        <select
          name="enterCarType"
          id="enterCarType"
          onChange={formik.handleChange}
          value={formik.values.enterCarType}
        >
          <option value="" disabled selected hidden></option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </select>
        <label htmlFor="enterCarType">Enter Car Type *</label>
      </div>
      <div className="form__group">
        <input
          id="numberOfTravellers"
          name="numberOfTravellers"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.numberOfTravellers}
        />
        <label htmlFor="numberOfTravellers">Number Of Travellers</label>
      </div>
      <button type="submit">Enter Bid details</button>
    </form>
  );
}

export default FirstForm;
