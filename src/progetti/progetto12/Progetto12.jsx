import "../../indexProgetto12.css";
import { Question } from "./Question";

function App() {
  return (
    <div className="flex flex-col h-full w-full gap-8 bg-orange-800 p-12 items-center">
      <Question
        answer="Siamo aperti dal lunedì al venerdì dalle 9:00 alle 18:00."
        question="Qual è il vostro orario di apertura?"
      />
      <Question
        answer="Sì, accettiamo pagamenti con tutte le principali carte di credito."
        question="Accettate pagamenti con carta di credito?"
      />
      <Question
        answer="Offriamo una politica di reso entro 30 giorni dall'acquisto."
        question="Qual è la vostra politica di reso?"
      />
      <Question
        answer="Sì, offriamo la spedizione internazionale per tutti i nostri prodotti. "
        question=" Offrite la spedizione internazionale?"
      />
      <Question
        answer="Puo contattarci tramite e-mail all`indirizzo supporto@esempio.com"
        question="Come posso contattare il vostro servizio clienti?"
      />
    </div>
  );
}

export default App;
