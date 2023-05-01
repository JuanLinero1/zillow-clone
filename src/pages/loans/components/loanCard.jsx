import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const loanCard = (props) => {
  return (
    <div className="loans__product--options-carousel-wrapper-item-container">
      {props.cardInformation.map((item, id) => {
        return (
          <div
            key={id}
            className="loans__product--options-carousel-wrapper-item-container-card"
          >
            <h2>{item.title}</h2>
            <h5>{item.subtitle}</h5>
            {item.list.map((item, id) => {
              return (
                <li key={id}>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  {item}
                </li>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default loanCard;
