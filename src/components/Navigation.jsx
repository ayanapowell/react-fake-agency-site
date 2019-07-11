import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <li>
        <Link to="/tour">Tour</Link>
      </li>
      <li>
        <Link to="/support">Support</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
  );
}

export default Navigation;
