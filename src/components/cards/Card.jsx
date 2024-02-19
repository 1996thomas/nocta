import React from "react";

export default function Card({data}) {
  return (
    <div className="card__wrapper">
      <div className="title">
        <p>{data.title}</p>
      </div>
      <div className="description">
        {data.description}
      </div>
      <div className="price">
        <div className="left"></div>
        <div className="right">190,00£</div>
      </div>
      <div className="image">
        <img src={data.image} alt="" />
      </div>
    </div>
  );
}
