import React from "react";
import { data } from './inattendu.js'

const cardA = () => {
  return(
    <div className="advertise__container">
      {
        data.map((item, id) => {
        return (
          <div key={id} className="advertise__container--card">
            <img src={item.url} alt="" />
            <div>
              <h2>{item.title}</h2>
              <button>Get started</button>
            </div>
          </div>
        )
        })
      }
    </div>
  )
};

export default cardA;
