import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?size=200x200`}
        className="br-100 h4 w4 dib ba b--black-05 pa2"
        title={name}
        alt={name}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
