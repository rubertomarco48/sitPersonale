import { useState } from "react"

import "../../indexProgetto13.css"

function Progetto13() {
  const [scelte,setScelte]=useState()
  const [elCasuale,setElCasuale]=useState()
  const [animating, setAnimating] = useState(false);
  const random = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setAnimating(true); // Inizia l'animazione
      setTimeout(() => {
        const array = scelte.split(",");
        const indiceCasuale = Math.floor(Math.random() * array.length);
        const elementoCasuale = array[indiceCasuale];
        setElCasuale(elementoCasuale);
        setAnimating(false); // Ferma l'animazione
      }, 500); // Durata dell'animazione
    }
  };
  return (
    <div id="progetto13">
      <h1>Inserisci le tue scelte separate da una virgola ( , )</h1>
      <h1>Premi invio per scegliere l'opzione</h1>
      <textarea
        onKeyDown={(e) => random(e)}
        onChange={(e) => setScelte(e.target.value)}
        name="scelte"
        id="scelte"
      ></textarea>
      <div id="scelte-singole">
        {scelte &&
          scelte.split(",").map((scelta, index) => {
            return (
              <h2
                key={index}
                className={`${animating ? "background-animation" : ""} ${elCasuale === scelta.trim() ? "highlight" : "ciao"}`}
              >
                {scelta}
              </h2>
            );
          })}
      </div>
     
    </div>
  );

}

export default Progetto13
