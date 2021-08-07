import React from "react";
import "./Header.css";
import logo from "./logo.PNG";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Vahak" />
    </div>
  );
}

export default Header;
