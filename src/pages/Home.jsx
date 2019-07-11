import React from "react";
import Hero from "../components/Hero";
import HeroImage from "../images/hero-home.png";
function Home() {
  return (
    <div className="homepage">
      <Hero
        image={HeroImage}
        eyebrow="Home"
        heading="Helping creative idea exceed"
      />
    </div>
  );
}

export default Home;
