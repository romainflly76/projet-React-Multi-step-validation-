import React, {useState} from 'react'
import './SubForm.css'

export default function HateLove(props) {

const [formData, setFormData] = useState ({
    prefs: {
        love: "",
        hate: "",
    },
});


// ********* Fonction handleTxtArea
const handleTxtArea = (e, pref) => {
    
    if(pref === 'love') {
        setFormData ({

            // Set d'un nouvel objet
            prefs: {
                // On spread formData de prefs
                ...formData.prefs,
                // Love recupere la valeur de l'evenement
                love: e.target.value
            }
        })
    }
    else if(pref === 'hate') {
        setFormData ({
            prefs: {
                ...formData.prefs,
                hate: e.target.value
            }
        })
    }
}



const preventFunc = (e) => {
    e.preventDefault();

    props.modifyIndex(6, formData)
}

 // *********  Le bouton retour arrière modifie l'index pour mettre la page inferieure *****
const handleReturn = () => {
    props.modifyIndex(4)
}

  return (
   <form className='preferences-form'
   onSubmit={preventFunc}>
       <p>Parle-nous des aliments que tu préfères et que tu deteste !</p>

       <label htmlFor="prefered">Tes aliments préférés, séparés par une virgule :</label>
       <textarea 
       onChange={e => handleTxtArea(e, 'love')}
       id="prefered"
       placeholder='Un ou plusieurs, si tu en as'
       ></textarea>

       <label htmlFor="hated">Les aliments que tu ne suporte pas, séparés par une virgule :</label>
       <textarea 
       onChange={e => handleTxtArea(e, 'hate')}
       id="hated"
       placeholder='Un ou plusieurs, si tu en as'
       ></textarea>

       <div className="container-nav-btns">
              <button onClick={handleReturn} type='button' className='prev'>Précédent</button>
              <button>Valider</button>
       </div>
   </form>
  )
}
