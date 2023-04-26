import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocust } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="home__hero">
      <h1 className="home__hero-title">Find it. Tour It. Own it.</h1>
      <form action="/" className="home__hero--form">
        <input
          type="text"
          className="home__hero--form-input"
          placeholder="Enter and address, neighbourhood, city or ZIP code"
        />
        <span className="home__hero--form-icon">  
          <FontAwesomeIcon icon={faMagnifyingGlass}  />
        </span>
      </form>
    </section>
  );
};

export default Hero;
