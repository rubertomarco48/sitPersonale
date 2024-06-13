import { useEffect, useState } from "react";

const FrameProgetto15=({follower,social,caption})=>{
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Definiamo l'intervallo
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        // Se il counter è minore di 10, incrementa di 1
        if (prevCounter < follower) {
          return prevCounter + 50;
        } else {
          // Altrimenti, pulisci l'intervallo
          clearInterval(interval);
          return prevCounter;
        }
      });
    }, 5); // Intervallo di 1 secondo

    // Cleanup dell'intervallo quando il componente viene smontato o il valore cambia
    return () => clearInterval(interval);
  }, []); // Dipendenza vuota per eseguire l'effetto solo una volta al montaggio
    return(
        <div className="card15">
            <img className="picture15" src={`/${social}.png`} alt="" />
            <h2 className="follower15 testo15 follower15">{counter}</h2>
            <h3 className="caption15 testo15">{caption}</h3>
        </div>
    )
}

export default FrameProgetto15;