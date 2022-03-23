import React, { useRef, useEffect } from 'react'
// import { connect } from 'react-redux'
import './SubForm.css'

// *********** Utilisation des props ***************
export default function Allergies(props) {

    // ************* Prevenir par defaut le fait que la page ne se charge pas *******
    const preventFunc = e => {
        e.preventDefault();

    // ************* Les données des checkbox dans un tableau **************$
    const styleData = {
        allergies:[]
        }
        allCheckboxes.current.forEach(checkbox => {
            if(checkbox.checked){
                styleData.allergies.push(checkbox.value)
            }
        })
         props.modifyIndex(5,styleData)
    };

    // ******** Utilisation des ref (checkbox) dans un tableau vide *****
    const allCheckboxes = useRef([])

    // ******** Ajout des eléments cochés dans le tableau ******
    const addCheck = el => {
        if(el && !allCheckboxes.current.includes(el)){
            allCheckboxes.current.push(el);
        }
    };
    console.log(allCheckboxes);

    // *********  Le bouton retour arrière modifie l'index pour mettre la page inferieure *****
    const handleReturn = () => {
        props.modifyIndex(3)
    }

    // ********* le retout (affichage de la Checkbox)
    return (
    <form 
      className='checkbox-form'
      onSubmit={preventFunc}>
          <p>As tu des allergies ?</p>
          <span>Choix multiples.</span>
          <label htmlFor="milk">Lait</label>
          <input ref={addCheck} type="checkbox"
          id='milk'
          value='milk'/>

          <label htmlFor="pollen">Pollen</label>
          <input ref={addCheck} type="checkbox"
          id='pollen'
          value='pollen'/>

          <label htmlFor="nuts">Noix</label>
          <input ref={addCheck} type="checkbox"
          id='nuts'
          value='nuts'/>

          <label htmlFor="eggs">Oeufs</label>
          <input ref={addCheck} type="checkbox"
          id='eggs'
          value='eggs'/>

          <label htmlFor="shellfish">Fruit de mer</label>
          <input ref={addCheck} type="checkbox"
          id='shellfish'
          value='shellfish'/>


          <div className="container-nav-btns">
              <button onClick={handleReturn} type='button' className='prev'>Précédent</button>
              <button>Valider</button>
          </div>
    </form> 
    )
}
