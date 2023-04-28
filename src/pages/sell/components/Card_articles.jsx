import React, { useEffect } from "react";

export const CardArticles = (props) => {
  console.log(props.index.prev)
  
  useEffect(() => {
    console.log(props.index.prev, props.index.curr)
  }, [props.index.prev, props.index.curr])
  return (
    <>
      {props.information.slice(props.index.prev, props.index.curr).map((item, id) => {
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
