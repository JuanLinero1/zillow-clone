import React from "react";

const Card = (props) => {
  return (
    <div className="home__container">
      {props.information.map((item, id) => {
        return (
          <div key={id} className="home__container--card">
            <img
              src={item.url}
              alt={item.title}
              className="home__container--card-img"
            />
            <h2 className="home__container--card-title">{item.title}</h2>
            <p className="home__container--card-text">{item.text}</p>
            <button className="home__container--card-button">
              {item.button}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
