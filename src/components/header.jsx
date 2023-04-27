import React from "react";

const header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav--list">
          <a className="header__nav--list-item" href="#">
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
          <img
            src="../../public/assets/images/home/z-logo-default.svg "
            alt="Zillow Logo"
          />
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
          <a className="header__nav--list-item" href="#">
            <li>Sign In</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default header;
