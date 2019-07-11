import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <div>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
}

export default Header;
