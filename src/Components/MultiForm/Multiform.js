import React, { useState } from "react";
import "./MultiForm.css";
import Indicator from "./Indicator/Indicator";
import Cardebegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import DietForm from "./SubForms/DietForm";
import FoodStyle from "./SubForms/FoodStyle";
import Allergies from "./SubForms/Allergies";
import HateLove from "./SubForms/HateLove";


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
  const modifyIndex = (index, data) => {
    // 1. SetFormIndex de index et dois recvoir index.
    setFormIndex(index);

    // si on lui a passé des données
    if(data){
      // on creer une constante nouvelles données "newData" 
      //On fait une copie du tableau dejà existant de allFromData
      const newData = {...allFormData}

      // on prend la propriété qui correspond à DietForm
      // premiere propriété des données qu'on va recevoir est égale à Object.keys
      // object.keys renvoi un tableau pour chaque element de ce tableau Diet, Vegetarian etc..
      // Object.keys(data)[0] on prend la premiere donnée
      const firstPropNewData = Object.keys(data)[0];

      // l'objet copié.DietForm est egale à data de firstPropNewdata
      newData[firstPropNewData] = data[firstPropNewData];

      // une fois que l'on a nos nouvelles données on fait setAllFormData de newData
      setAllFormData(newData);
    }
  }
  console.log(allFormData);

  const elements = [
    <Cardebegin modifyIndex={modifyIndex} />,
    <DietForm modifyIndex={modifyIndex} />,
    <FoodStyle modifyIndex={modifyIndex} />,
    <Allergies modifyIndex={modifyIndex} />,
    <HateLove modifyIndex={modifyIndex} />,
    <CardEnd modifyIndex={modifyIndex} />,
  ]
  

  return (
    <div className="container-multiform">
      <Indicator formIndex={formIndex}/>

      {/*  On map à travers le tableau elements  on prends l'item et l'index 
       pour avoir accs aux index */}
      {elements.map((item, index) => {
        // si index + 1 comme l'index commence à 0 mais dans 
        // le state on a commencer l'index à 1
        if((index + 1) === formIndex){

        // ça retourn l'index du tableau elements
          return elements[index]
        }
      })}

      {/* { formIndex === 1 ? <Cardebegin modifyIndex={modifyIndex} />
      : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} />
      : formIndex === 3 ? <FoodStyle modifyIndex={modifyIndex} />
      : formIndex === 4 ? <Allergies modifyIndex={modifyIndex} />
      : formIndex === 5 ? <HateLove modifyIndex={modifyIndex} />
      : formIndex === 6 ? <CardEnd modifyIndex={modifyIndex} />
      : "" } */}
    </div>
  );
}
 