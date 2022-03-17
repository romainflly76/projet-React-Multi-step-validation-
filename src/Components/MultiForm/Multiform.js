import React, { useState } from "react";
import "./MultiForm.css";
import Indicator from "./Indicator/Indicator";
import Cardebegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import DietForm from "./SubForms/DietForm";


export default function Multiform() {
  // Il faut utiliser un index pour suivre tous les formulaires
  // on le demarre à usestate (1)
  const [formIndex, setFormIndex] = useState(1);

  // autre state: un objet on commence par dietForm
  const [allFormData, setAllFormData] = useState({
    dietForm: "",
    // Foodstyle est un tableau car on peux avoir plusieurs choix
    foodStyle: [],
    // Pareil pour Allergies, un tableau pour plusieurs allergies
    allergies: [],
    // un objet avec Deux chaines de caracteres: Love & Hate
    prefs: {},
  });


  // 2. Reçois index
  const modifyIndex = (index) => {
    // 1. SetFormIndex de index et dois recvoir index.
    setFormIndex(index);
  };

  return (
    <div className="container-multiform">
      <Indicator />
      { formIndex === 1 ? <Cardebegin modifyIndex={modifyIndex} />
      : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} />
      : "" }
    </div>
  );
}
