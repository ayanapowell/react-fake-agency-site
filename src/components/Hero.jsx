import React from "react";

function Hero(props) {
  return (
    <div className="hero">
      <img src={props.image} alt="" />
      <div className="hero__inner">
        <h1>{props.eyebrow}</h1>
        <h2>{props.heading}</h2>
      </div>
    </div>
  );
}

export default Hero;
