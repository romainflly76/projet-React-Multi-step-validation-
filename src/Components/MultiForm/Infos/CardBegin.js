import React from "react";
import "./Card.css";

export default function CardBegin(props) {
  return (
    <div className="card">
      <h1>🍣 Aide-nous à ravir tes papilles 🌶️ </h1>

      {/* Onclick on attends un argument donc fonction anonyme */}
      <button onClick={() => props.modifyIndex(2)}>Commencer</button>
    </div>
  );
}
