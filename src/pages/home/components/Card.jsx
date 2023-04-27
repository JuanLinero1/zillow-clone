import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [condition, setCondition] = useState(false);
  const [elementId, setElementId] = useState(0)

  return (
    <div className="home__container">
      {props.information.map((item, id) => {
        return (
          <div
            key={id}
            className={`home__container--card ${condition && elementId === id ? "active" : ""}`}
            onMouseEnter={(e) => {
              setElementId(id)
              console.log(elementId)
              setCondition(true);
            }}
            onMouseLeave={(e) => {
              setCondition(false);
            }}
          >
            <img
              src={item.url}
              alt={item.title}
              className="home__container--card-img"
            />
            <h2 className="home__container--card-title">{item.title}</h2>
            <p className='home__container--card-text'>{item.text}</p>
            <button className={`home__container--card-button ${condition && elementId === id ? "active" : ""}`}>
              {item.button}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
