import React from "react";
import CardA from "./components/cardA";

const Advertise = () => {
  return (
    <div className="advertise">
      <div className="advertise__info">
        {" "}
        <h1>Let Zillow Build Your Business</h1>
        <h4>
          Reach millions of buyers, sellers and renters on the largest real
          estate network on the web.
        </h4>
        <div className="inline"></div>
        <h3>Select your industry to get started</h3>
      </div>
      <CardA />
      <div className="advertise__target">
        <h1>
          Reach your target audience on our network of leading real estate
          sites.
        </h1>
        <img
          src="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Zillow_Sites2x-cd3144-c697dc-fbb28e.png"
          alt=""
        />
      </div>
      <div className="advertise__audience">
        <h1>Zillow Group Audience</h1>
        <div>
          <div>
            <img
              src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/2/2020/05/42-1ae07b-392e2d.png"
              alt=""
            />
            <h3>41% to buy or sell</h3>
            <p>
              Nearly 41% of people who visited Zillow and/or Trulia in the past
              12 months are planning to buy and/or sell a home in the next 12
              months.
            </p>
          </div>
          <div>
            <img
              src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/2/2020/05/160M-db1f4a-2e10e9.png"
              alt=""
            />
            <h3>194 million</h3>
            <p>
              More than 194 million average monthly unique users visited Zillow
              Group brands’ mobile apps and websites in Q2 2019.
            </p>
          </div>
          <div>
            <img
              src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/2/2020/05/32M-de7e86-72e8ff.png"
              alt=""
            />
            <h3>Most visited rental network</h3>
            <p>Zillow Rentals is the most visited rental network</p>
          </div>
        </div>
        <p>
          Source: 41% stat: Zillow Group Tracking Survey, Q2 2019. 194 million
          stat: Google Analytics and Adobe Analytics. Rental network claim:
          Comscore Media Metrix® Multi-Platform, Key Measures, Custom-defined
          list including: Zillow Rentals, Apartments.com Network, RentPath
          Network, ForRent.com & Homes.com Network, Total Visits, July 2020,
          United States. Zillow Rentals is the deduplicated reach of Zillow.com
          Rentals, Trulia.com Rentals and HotPads.com.
        </p>
      </div>
    </div>
  );
};

export default Advertise;
