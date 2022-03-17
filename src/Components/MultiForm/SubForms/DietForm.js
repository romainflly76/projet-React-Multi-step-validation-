import React, { useState } from "react";
import "./SubForm.css";

export default function DietForm() {
  // ça permet de prevenir le comportement par defaut d'un formulaire
  // le formulaire envoi des données. Du coup, pas de rafraichissement de page
  const preventFunc = (e) => e.preventDefault();

  // On submit pour lorsqu'on appuie sur entré par exemple
  return (
    <form onSubmit={preventFunc} className="diet-form">
      <p>Quelle est ton regime alimentaire</p>
    </form>
  );
}
