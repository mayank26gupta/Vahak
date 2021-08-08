import React, { useState } from "react";
import "./OTP.css";
import { useHistory } from "react-router";

function OTP() {
  const history = useHistory();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    if (otp.join("") === "1234") {
      history.push("./forth");
    } else {
      alert("incorrect OTP");
      setOtp([...otp.map((v) => "")]);
    }
  };

  return (
    <div class="OTP_section">
      <div className="digit-group">
        {otp.map((data, index) => {
          return (
            <input
              type="text"
              id="digit"
              name="digit"
              placeholder="0"
              className="digits"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>
      <small onClick={() => setOtp([...otp.map((v) => "")])}>
        Resend OTP again
      </small>
      <button onClick={handleSubmit} className="btn_verifyOTP">
        Verify via OTP
      </button>
    </div>
  );
}

export default OTP;
