import React from "react";

const CardBuy = (props) => {
  return (
    <div className="buy__content--product">
      {props.data.features.map((item, id) => {
        return (
          <div
            key={id}
            className="buy__content--product-card"
            onClick={() =>
              props.setCoordinates({
                lat: item.geometry.coordinates.lat,
                lng: item.geometry.coordinates.lng,
              })
            
            }
          >
            <img src={item.properties.Image} alt={item.properties.NAME} />
            <div className="buy__content--product-card-info">
              <h3>{"$" + item.properties.Cost}</h3>
              <p>{item.properties.DESCRIPTION}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardBuy;
