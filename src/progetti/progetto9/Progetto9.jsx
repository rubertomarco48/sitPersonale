import { Audio } from "./Audio"
import '../../indexProgetto9.css'

function Progetto9() {
  return (
    <div className="flex justify-center h-40 gap-4 w-full items-center flex-wrap m-auto">
      <Audio src="./src/assets/applausi.mp3" name="Applausi"/>
      <Audio src="./src/assets/boo.mp3" name="Boo"/>
      <Audio src="./src/assets/gasp.mp3" name="Gasp"/>
      <Audio src="./src/assets/sbagliato.mp3" name="Lose"/>
      <Audio src="./src/assets/successo.mp3" name="Win"/>
      <Audio src="./src/assets/thunder.mp3" name="Thunder"/>
      <Audio src="./src/assets/tada.mp3" name="Tada"/>
    </div>
  )
}

export default Progetto9