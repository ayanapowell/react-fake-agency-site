import React from "react";
import Hero from "../components/Hero";
import HeroImage from "../images/hero-about.png";

function About() {
  return (
    <div className="aboutpage">
      <Hero
        image={HeroImage}
        eyebrow="About"
        heading="Meet the team that makes it happen."
      />
    </div>
  );
}

export default About;
