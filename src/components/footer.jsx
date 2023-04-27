import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer__list">
        <ul className="footer__list--container">
          <li className="footer__list--container-item">About</li>
          <li className="footer__list--container-item">Zestimates</li>
          <li className="footer__list--container-item">Research</li>
          <li className="footer__list--container-item">Careers</li>
          <li className="footer__list--container-item">Help</li>
          <li className="footer__list--container-item">Advertise</li>
          <li className="footer__list--container-item">Fair Housing Guide</li>
          <li className="footer__list--container-item">Terms of use</li>
          <li className="footer__list--container-item">Privacy Portal</li>
          <li className="footer__list--container-item">Cookie Preference</li>
          <li className="footer__list--container-item">Blog</li>
          <li className="footer__list--container-item">AI</li>
          <li className="footer__list--container-item">Mobile Apps</li>
          <li className="footer__list--container-item">Trulia</li>
          <li className="footer__list--container-item">StreetEasy</li>
          <li className="footer__list--container-item">HotPads</li>
          <li className="footer__list--container-item">Out East</li>
          <li className="footer__list--container-item">ShowingTime</li>+
        </ul>
      </div>
      <div className="footer__link">
        <a href="#">Do Not Sell or Share My Personal Information→</a>
      </div>
      <hr />
      <div className="footer__info">
        <p className="footer__info--text">
          Zillow Group is committed to ensuring digital accessibility for
          individuals with disabilities. We are continuously working to improve
          the accessibility of our web experience for everyone, and we welcome
          feedback and accommodation requests. If you wish to report an issue or
          seek an accommodation, please{" "}
          <a href="#" className="footer__info--text-link">
            let us know
          </a>
          .
        </p>
        <p className="footer__info--text">
          Zillow, Inc. holds real estate brokerage <a href="#">licenses</a> in
          multiple states. Zillow (Canada), Inc. holds real estate brokerage{" "}
          <a href="#">licenses</a> in multiple provinces.
        </p>
        <p className="footer__info--text">
          <a href="#" className="footer__info--text-link">
            § 442-H New York Standard Operating Procedures
          </a>{" "}
          <br />§{" "}
          <a href="#" className="footer__info--text-link">
            New York Fair Housing Notice
          </a>{" "}
          <br />
          TREC:{" "}
          <a href="#" className="footer__info--text-link">
            Information about brokerage services, Consumer protection notice
          </a>{" "}
        </p>
        <br />
        California DRE #1522444 <br />
        <a href="https://youtube.com" className="footer__info--text-link">
          <span className="footer__info--text-link-inline">
            Contact Zillow, Inc. Brokerage
          </span>
        </a>{" "}
        <br />
        <br />
        <p className="footer__info--text">
          {" "}
          For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
          REALTOR® logo are controlled by The Canadian Real Estate Association
          (CREA) and identify real estate professionals who are members of CREA.
          The trademarks MLS®, Multiple Listing Service® and the associated
          logos are owned by CREA and identify the quality of services provided
          by real estate professionals who are members of CREA. Used under
          license.
        </p>
      </div>
      <div className="footer__download">
        <img
          src="/public/assets/images/home/google-play-badge.svg"
          alt="Google play badge"
        />
        <img
          src="/public/assets/images/home/app-store-badge.svg"
          alt="App store badge"
        />
      </div>
      <div className="footer__social">
        <img className="footer__social-logo" src="/public/assets/images/home/z-logo-default.svg" alt="" />
        <span className="footer__social--text">Follow us: </span>
        <span className="footer__social-icon"><FontAwesomeIcon icon={faFacebook} /></span>
        <span className="footer__social-icon"><FontAwesomeIcon icon={faInstagram} /></span>
        <span className="footer__social-icon"><FontAwesomeIcon icon={faTiktok} /></span>
        <span className="footer__social-icon"><FontAwesomeIcon icon={faTwitter} /></span>
        <span className="footer__social--text">© 2006-2023 Zillow</span>
        <img src="" alt="" />   
      </div>
      <figure className="footer__img">
        <img src="/public/assets/images/home/footer-art.svg" alt="" />
      </figure>
    </div>
  );
};

export default Footer;
