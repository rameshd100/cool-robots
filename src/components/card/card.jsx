import React from "react";

import "./card.css";

const Card = (props) => (
  <div className="card-container">
    <img alt="robot" src={`https://robohash.org/${props.robot.id}?set=set3&size=180x180`} />
    <div className="card-discription">
      <h2> Name: {props.robot.name} </h2>
      <p>Email: {props.robot.email}</p>
      <p> Username:{props.robot.username} </p>
    </div>
  </div>
);
export default Card;
