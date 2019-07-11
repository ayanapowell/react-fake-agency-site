import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <Navigation />
    </div>
  );
}

export default Header;
