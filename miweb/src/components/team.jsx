import React from "react";
import "./team.css"

function Team({ name, description, imageUrl }) {
  return (
    <div className="miembro">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Team;
