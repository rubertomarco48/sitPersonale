import Contatti from "./Contatti"
import Home from "./Home"

const HomePiuContatti=()=>{
    return(
        <div className="w-full flex flex-col items-center">
            <Home/>
            <Contatti/>
        </div>
    )
}

export default HomePiuContatti