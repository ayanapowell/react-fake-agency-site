import React from "react";
import logoImage from "../images/logo.png";
import "../styles/styles.scss";

const logoEl = {
  maxWidth: "300px"
};
function Logo() {
  return (
    <div>
      <h2>Hello</h2>
      <img src={logoImage} alt="" style={logoEl} />
    </div>
  );
}

export default Logo;
