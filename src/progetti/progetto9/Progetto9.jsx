import { Audio } from "./Audio"
import '../../indexProgetto9.css'

function Progetto9() {
  return (
    <div className="flex justify-center h-40 gap-4 w-full items-center flex-wrap m-auto">
      <Audio src="/applausi.mp3" name="Applausi"/>
      <Audio src="/boo.mp3" name="Boo"/>
      <Audio src="/gasp.mp3" name="Gasp"/>
      <Audio src="/sbagliato.mp3" name="Lose"/>
      <Audio src="/successo.mp3" name="Win"/>
      <Audio src="/thunder.mp3" name="Thunder"/>
      <Audio src="/tada.mp3" name="Tada"/>
    </div>
  )
}

export default Progetto9