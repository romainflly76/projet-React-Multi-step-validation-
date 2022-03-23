import React, { useState } from "react";
import "./SubForm.css";

export default function DietForm(props) {

  // recuperation données: creer un state
  const [formData, setFormData] = useState({
    // On fait demarer à nodiet
    DietForm: 'nodiet'
  });

  const handleRadio = e => {
    // a chaque fois qu'on va changer un bouton radio avec la propriété 
    // objet: dietForm qui va prendre la valeur. on met à jour le state
    setFormData({
        dietForm: e.target.value
    })
  }

  console.log(formData);
  // ça permet de prevenir le comportement par defaut d'un formulaire
  // le formulaire envoi des données. Du coup, pas de rafraichissement de page
  const preventFunc = (e) => e.preventDefault();

  // On submit pour lorsqu'on appuie sur entré par exemple
  return (
    <form onSubmit={preventFunc} className="diet-form">
      <p>Quelle est ton regime alimentaire</p>

      <label htmlFor="nodiet">Pas de régime en particulier</label>
      <input 
      onChange={handleRadio}
      type="radio" 
      name="diet"
      id="nodiet"
      value="nodiet"
      />

      <label htmlFor="homnivorous">omnivore</label>
      <input 
      onChange={handleRadio}
      type="radio" 
      name="diet"
      id="homnivorous"
      value="homnivorous"
      />

      <label htmlFor="Vegetarian">Végétarien</label>
      <input 
      onChange={handleRadio}
      type="radio" 
      name="diet"
      id="vegetarian"
      value="vegetarian"
      />

      <label htmlFor="vegan">Végan</label>
      <input 
      onChange={handleRadio}
      type="radio" 
      name="diet"
      id="vegan"
      value="vegan"
      />

      <button onClick={() => props.modifyIndex(3, formData)}>Valider</button>
    </form>
  );
}
