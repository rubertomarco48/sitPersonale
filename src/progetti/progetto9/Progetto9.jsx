import { Audio } from "./Audio"
import './index.css'

function Progetto9() {
  return (
    <div className="flex justify-center h-40 gap-4 w-full items-center flex-wrap m-auto">
      <Audio src="./src/progetti/progetto9/audio/applausi.mp3" name="Applausi"/>
      <Audio src="./src/progetti/progetto9/audio/boo.mp3" name="Boo"/>
      <Audio src="./src/progetti/progetto9/audio/gasp.mp3" name="Gasp"/>
      <Audio src="./src/progetti/progetto9/audio/sbagliato.mp3" name="Lose"/>
      <Audio src="./src/progetti/progetto9/audio/successo.mp3" name="Win"/>
      <Audio src="./src/progetti/progetto9/audio/thunder.mp3" name="Thunder"/>
      <Audio src="./src/progetti/progetto9/audio/tada.mp3" name="Tada"/>
    </div>
  )
}

export default Progetto9