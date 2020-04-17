import React from "react";
import "./card.style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`http://edgecats.net/${props.monster.id}`}
        // src={`https://randomuser.me/api/portraits/thumb/lego/${props.monster.id}.jpg`}
        alt="lego-images"
        width="100px"
        height="100px"
      />
      <h2>{props.monster.name}</h2>
    </div>
  );
};

export default Card;
