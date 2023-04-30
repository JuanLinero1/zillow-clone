import React, { useState } from "react";
import SignIn from "../pages/sign-in/signIn";

const header = () => {
  const [condition, setCondition] = useState(false);
  const [logCondition, setLogCondition] = useState(false);
  const [email, setEmail] = useState("");
  console.log(email)

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--list">
          <a className="header__nav--list-item" href="/Buy">
            <li>Buy</li>
          </a>
          <a className="header__nav--list-item" href="#">
            <li>Rent</li>
          </a>
          <a className="header__nav--list-item" href="/Sell">
            <li>Sell</li>
          </a>
          <a className="header__nav--list-item" href="#">
            <li>Home Loans</li>
          </a>
          <a className="header__nav--list-item" href="#">
            <li>Agent Finder</li>
          </a>
        </ul>
        <figure className="header__nav--img">
          <a href="/">          <img
            src="../../public/assets/images/home/z-logo-default.svg "
            alt="Zillow Logo"
          /></a>
        </figure>
        <ul className="header__nav--list">
          <a className="header__nav--list-item" href="#">
            <li>Manage Rentals</li>
          </a>
          <a className="header__nav--list-item" href="#">
            <li>Advertise</li>
          </a>
          <a className="header__nav--list-item" href="#">
            <li>Help</li>
          </a>
          <a
            className={`header__nav--list-item ${
              !logCondition ? "active" : "inactive"
            }`}
            href="#"
          >
            <li
              onClick={() => {
                setCondition(true);
              }}
            >
              Sign In
            </li>
          </a>
          <a
            className={`header__nav--list-item ${
              logCondition ? "active" : "inactive"
            }`}
            href="#"
          >
            <li className="header__nav--list-item-drop">
              <div className="header__nav--list-item-drop-menu">
                <h4>welcome, this is your information</h4>
                email: {email}
              </div>
              <img src={`https://robohash.org/${email}`} alt="profile image" />
            </li>
          </a>
        </ul>
      </nav>
      <SignIn
        setEmail={setEmail}
        logCondition={setLogCondition}
        condition={{ setCondition, condition }}
      />
    </header>
  );
};

export default header;
