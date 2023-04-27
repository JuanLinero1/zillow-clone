import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card__hero = (props) => {
  return (
    <>
      {props.information.map((item, itemId) => {
        return (
          <div key={itemId} className="sell__hero--agent">
            <div className="sell__hero--agent-info">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <button>{item.button}</button>
              <a href="#">{item.link}</a>
              <div className="sell__hero--agent-info-cards">
                <div>
                  <h3>{item.cardTitle1}</h3>
                  <ul>
                    {item.card1.map((item, id) => {
                      return (
                        <li key={id}>
                          <span>
                            <FontAwesomeIcon icon={faCheck} />
                          </span>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h3>{item.cardTitle2}</h3>
                  <p>{item.cardText2}</p>
                </div>
                <span>{item.span}</span>
              </div>
            </div>
            <figure className="sell__hero--agent-image">
              <img src={item.URL} alt={item.title} />
            </figure>
          </div>
        );
      })}
    </>
  );
};
