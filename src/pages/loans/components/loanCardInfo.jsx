import React from "react";

const loanCardInfo = (props) => {
  const item = props.information;
  return (
    <div className="loans__product--options-carousel-wrapper-item-info">
      <div className="loans__product--options-carousel-wrapper-item-info-content">
        <h3>{item.title}</h3>
        <div className="inline"></div>
        <p>{item.text}</p>
        <button>{item.button}</button>
      </div>
      <figure>
        <img
          src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/10/pig.png"
          alt="money pig"
        />
      </figure>
    </div>
  );
};

export default loanCardInfo;
