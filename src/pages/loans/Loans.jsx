import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Card from "./components/loanCard";
import CardInfo from "./components/loanCardInfo";
import { data } from "./components/cardinformation";

const Loans = () => {
  return (
    <div className="loans">
      <div className="loans__hero">
        <div className="loans__hero--inner">
          <img
            src="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/10/2023/01/zhl.svg"
            alt=""
          />
          <h1>Buy your next home with a brand you can trust</h1>
          <div className="loans__hero--inner-line"></div>
          <p>
            Get one step closer to landing the home you want by getting
            pre-qualified with Zillow Home Loans.
          </p>
          <button>Get pre-qualified</button>
          <a href="">Explore next steps</a>
        </div>
      </div>
      <div className="loans__product">
        <h1>Why work with Zillow Home Loans</h1>
        <h5>
          See how our team has helped thousands of customers in their home
          buying journey.
        </h5>
        <div className="loans__product--carousel">
          <div className="loans__product--carousel-wrapper">
            <CarouselProvider
              naturalSlideWidth={50}
              naturalSlideHeight={1}
              totalSlides={3}
            >
              <Slider>
                <div className="loans__product--carousel-wrapper-card">
                  <Slide index={0}>
                    <div>
                      <img
                        src="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/10/2023/02/competitive-rates.svg"
                        alt=""
                        className="loans__product--carousel-wrapper-card-img"
                      />
                      <h3 className="loans__product--carousel-wrapper-card-title">
                        Great rate and customer service
                      </h3>
                      <img
                        src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/11/%F0%9F%A4%96-RatingStars.svg"
                        alt="stars review"
                        className="loans__product--carousel-wrapper-card-review"
                      />
                      <p className="loans__product--carousel-wrapper-card-text">
                        “Zillow [Home Loans] provided a great rate and
                        competitive closing costs. They worked with me through
                        some schedule challenges and closing challenges that
                        made me really appreciate the service they provided.”
                      </p>
                      <h5 className="loans__product--carousel-wrapper-card-name">
                        Aaron P.
                      </h5>
                      <h5 className="loans__product--carousel-wrapper-card-location">
                        Florida
                      </h5>
                    </div>
                  </Slide>
                  <Slide index={0}>
                    <div>
                      <img
                        src="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/10/2023/02/%F0%9F%96%A5-trusted-loan-officers.svg"
                        alt=""
                        className="loans__product--carousel-wrapper-card-img"
                      />
                      <h3 className="loans__product--carousel-wrapper-card-title">
                        Outstanding service
                      </h3>
                      <img
                        src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/11/%F0%9F%A4%96-RatingStars.svg"
                        alt="stars review"
                        className="loans__product--carousel-wrapper-card-review"
                      />
                      <p className="loans__product--carousel-wrapper-card-text">
                        “There are very few people who have gained my trust and
                        loyalty as this lender. Not only did my loan officer
                        explain the process so efficiently and in excellent
                        detail, but his honesty and reliability is second to
                        none. He truly had my back and wanted to see me succeed.
                        I felt that my mortgage needs were taken care of and
                        that he always had my best interest in mind.”
                      </p>
                      <h5 className="loans__product--carousel-wrapper-card-name">
                        Juan G.
                      </h5>
                      <h5 className="loans__product--carousel-wrapper-card-location">
                        Wyoming
                      </h5>
                    </div>
                  </Slide>
                  <Slide index={0}>
                    <div>
                      <img
                        src="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/10/2023/02/transparent-process.svg"
                        alt=""
                        className="loans__product--carousel-wrapper-card-img"
                      />
                      <h3 className="loans__product--carousel-wrapper-card-title">
                        Very efficient and honest
                      </h3>
                      <img
                        src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/11/%F0%9F%A4%96-RatingStars.svg"
                        alt="stars review"
                        className="loans__product--carousel-wrapper-card-review"
                      />
                      <p className="loans__product--carousel-wrapper-card-text">
                        “My loan officer was amazing to work with. He was very
                        knowledgeable of the process and explained things very
                        clearly. The work was done efficiently and he was very
                        honest and upfront with the process, which made me feel
                        much more comfortable as compared to other lenders I
                        have used.”
                      </p>
                      <h5 className="loans__product--carousel-wrapper-card-name">
                        Richard T.
                      </h5>
                      <h5 className="loans__product--carousel-wrapper-card-location">
                        California
                      </h5>
                    </div>
                  </Slide>
                </div>
              </Slider>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider>{" "}
          </div>
          <h6>
            Reviews may have been minimally edited for grammar. Some names may
            be omitted for privacy.
          </h6>
        </div>
        <div className="loans__product--options">
          <h1>Explore our loan options</h1>
          <div className="loans__product--options-carousel">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              totalSlides={2}
            >
              <div className="loans__product--options-carousel-wrapper">
                <Slider>
                  <div className="loans__product--options-carousel-wrapper-item">
                    <Slide index={0}>
                      <Card cardInformation={data.Purchase.cards} />
                      <CardInfo information={data.Purchase.info} />
                    </Slide>
                  </div>
                  <div className="loans__product--options-carousel-wrapper-item">
                    <Slide index={1}>
                      <Card cardInformation={data.Refinance.cards} />
                      <CardInfo information={data.Refinance.info} />
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
          </div>
        </div>
        <figure className="loans__product--figure"></figure>
        <div className="loans__product--finance">
          <h1>A one-stop shop for financing your next home</h1>
          <h3>
            Whether you're just getting started or ready to make an offer, we're
            here to help.
          </h3>
          <div className="loans__product--finance-container">
            <div className="loans__product--finance-container-top">
              <div>
                <div className="loans__product--finance-container-top-info">
                  <h2>Getting started</h2>
                  <h3>I plan to buy in 6+ months</h3>
                  <div className="inline"></div>
                  <p>
                    Deciding how much you can comfortably spend on a home will
                    help you prepare for your search.
                  </p>
                </div>
                <figure>
                  <img
                    src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/11/getting-started.svg"
                    alt="calculator img"
                  />
                </figure>
              </div>
              <div className="loans__product--finance-container-top-button">
                <button>Calculate your affordability</button>
                <button>Learn about home buying</button>
              </div>
            </div>
            <div className="loans__product--finance-container-bottom">
              <div className="loans__product--finance-container-bottom-left">
                <figure>
                  <img
                    src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/11/searching-for-the-right-home.svg"
                    alt=""
                  />
                </figure>
                <div>
                  <h1>Searching for the right home</h1>
                  <h3>I plan to buy in 3- 6 months</h3>
                  <div className="inline"></div>
                  <p>
                    Shop confidently knowing that you qualify with Zillow Home
                    Loans for the amount you need.
                  </p>
                </div>
                <button>Get pre-qualified</button>
                <img
                  src="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/10/2023/01/zhl.svg"
                  alt="zillow logo"
                />
              </div>
              <div className="loans__product--finance-container-bottom-rigth">
                <figure>
                  <img
                    src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/11/making-offers.svg"
                    alt=""
                  />
                </figure>
                <div>
                  <h1>Making offers</h1>
                  <h3>I plan to buy in less than 3 months</h3>
                  <div className="inline"></div>
                  <p>
                    Compare your financing options with the help from a Zillow
                    Home Loans loan officer.
                  </p>
                </div>
                <button>Start a call</button>
                <img
                  src="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/10/2023/01/zhl.svg"
                  alt="zillow logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
