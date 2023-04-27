import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card__hero } from "./components/card__hero";
import { CardArticles } from "./components/Card_articles";
import { info } from "./components/information";
import { card__article__information } from "./components/card_articles_information";

const Sell = () => {
  return (
    <div className="sell">
      <div className="sell__intro">
        <h1 className="sell__intro--title">Sell your home with confidence</h1>
        <h3 className="sell__intro--subtitle">
          Zillow is making it simpler to sell your home and move forward.
        </h3>
      </div>
      <div className="sell__hero">
        <div className="sell__hero--partner">
          <div className="sell__hero--partner-info">
            <h1>Sell with a partner agent or get a cash offer</h1>
            <p className="sell__hero--partner-info-text">
              Zillow helps you sell your home, your way. Easily explore your
              selling options below and get personalized market value estimates
              — we can even help you choose the best option when you’re ready.
            </p>
            <p className="sell__hero--partner-info-text">
              <i>
                {" "}
                This experience is currently available in the{" "}
                <strong>
                  Atlanta, Dallas, Houston, Phoenix and Raleigh
                </strong>{" "}
                markets. We'll be expanding to more markets soon.
              </i>
            </p>
            <h5 className="sell__hero--partner-info-subtitle">
              Compare personalized options, no commitment required
            </h5>
            <form
              className="sell__hero--partner-info-form"
              placeholder="Enter your address"
            >
              <input type="text" />
              <span className="sell__hero--partner-info-form-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </form>
            <div className="sell__hero--partner-products">
              <div className="sell__hero--partner-left-box">
                <h3>Sell with a Zillow partner agent</h3>
                <p>
                  List your home with a Zillow partner agent to get local
                  expertise and potentially maximize your sales price.
                </p>
              </div>
              <div className="sell__hero--partner-right-box">
                <h3>Sell directly to Opendoor</h3>
                <p>
                  Get an all-cash offer from our trusted partner, Opendoor, to
                  sell your home faster and avoid the hassle of showings.*
                </p>
                <span>
                  <i>*Offer eligibility and purchase price vary.</i>
                </span>
              </div>
            </div>
          </div>
          <div className="sell__hero--partner-image">
            <img
              src="\public\assets\images\sell\2x_Miso_Module_Vector_CMS_Full.png"
              alt=""
            />
          </div>
        </div>
        <Card__hero information={info} />
      </div>
      <div className="sell__line">
        <div></div>
      </div>
      <div className="sell__resources">
        <h1>Go-to resources for a successful sale</h1>
        <div className="sell__resources--start">
          <h2>Explore your home's value</h2>
          <h4>Enter your address to get your free Zestimate.</h4>
          <form action="" className="sell__resources--start-form">
            <input type="text" placeholder="Enter your home address" />
            <button type="submit">Get Started</button>
          </form>
        </div>
        <div className="sell__resources--articles">
          <h3>Get acquainted with the process</h3>
          <h5>
            As you begin the steps to selling, learn what to expect with our{" "}
            <a href="#">Sellers Guide</a>
          </h5>
          <div className="sell__resources--articles-container">
            <CardArticles information={card__article__information} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
