import React, { useRef, useEffect } from 'react'
// import { connect } from 'react-redux'
import './SubForm.css'

export default function FoodStyle(props) {

    const preventFunc = e => {
        // preventDefault pour eviter de mette à jour la page.
        e.preventDefault();

        // c'est à ce moment là qu'on fait un const styleData lorsqu'on choisi un style de 
        // cuisine et qu'on submit
        const styleData = {
            //foodstyle demarre à un tableau vide et on rempli le tableau vide de toutes les 
            // checkBox qui ont étés cocher.
            foodStyle:[]
        }
        // toutes les checkbox . current pour arriver au tableau . for each pour chaques 
        //elements du tableau, valeur courante pour chaque checkbox
        allCheckboxes.current.forEach(checkbox => {
            // si on a checké (valider la checkbox)
            if(checkbox.checked){
                // ALors le style de styleData on pousse la valeur de la checkbox
                styleData.foodStyle.push(checkbox.value)
            }
        })
        // on modifie l'index des props à la page 4 et on modifie les data
        props.modifyIndex(4,styleData)

    };

    // on utilise les ref avec un tableau vide
    const allCheckboxes = useRef([])

    // Ensuite on fait un const pour chaque element qu'on rentre dans le tableau
    // addCheck est egale à element qu'on rentre
    const addCheck = el => {

        // si el est true et different de allCheckboxes.current.includes
        if(el && !allCheckboxes.current.includes(el)){
            // Et s'il n'est pas dejà present dans le tableau
            // Alors on le push dans le tableau
            allCheckboxes.current.push(el);
        }
    };

    console.log(allCheckboxes);

    const handleReturn = () => {
        props.modifyIndex(2)
    }
    return (
    <form 
      className='checkbox-form'
      onSubmit={preventFunc}>
          <p>Quelles sont tes cuisines préférées ?</p>
          <span>Choix multiples.</span>
          <label htmlFor="italian">Italienne</label>
          <input ref={addCheck} type="checkbox"
          id='italian'
          value='italian'/>

          <label htmlFor="japanese">Japonaise</label>
          <input ref={addCheck} type="checkbox"
          id='japanese'
          value='japanse'/>

          <label htmlFor="indian">Indienne</label>
          <input ref={addCheck} type="checkbox"
          id='indian'
          value='indian'/>

          <label htmlFor="thaï">Thaïlandaise</label>
          <input ref={addCheck} type="checkbox"
          id='thaï'
          value='thaï'/>

          <label htmlFor="french">Française</label>
          <input ref={addCheck} type="checkbox"
          id='french'
          value='french'/>

          <label htmlFor="chinese">Chinoise</label>
          <input ref={addCheck} type="checkbox"
          id='chinese'
          value='chinese'/>

          <div className="container-nav-btns">
              <button onClick={handleReturn} type='button' className='prev'>Précédent</button>
              <button>Valider</button>
          </div>
    </form>
          
      
    )
  
}
