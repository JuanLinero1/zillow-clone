import React from "react";

export const CardArticles = (props) => {
  return (
    <>
      {props.information.map((item, id) => {
        return (
          <div key={id} className="sell__resources--articles-container-card">
            <img src={item.URL} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        );
      })}
    </>
  );
};
