import { useState } from "react";
import "../../indexProgetto14.css"
function Progetto14() {
  const [nascondi, setNascondi] = useState(true);
  const [col, setCol] = useState();
  const handleChangeColor = (e) => {
    
    switch (e.target.innerText) {
      case "Home":
        setCol("Red");

        break;
      case "Contatti":
        setCol("Green");

        /* console.log(`questo ${col}`) */
        break;
      case "Link":
        setCol("Blue");

        break;

      case "Shop":
        setCol("Yellow");

        break;
      case "ciao":
        setCol("Purple");

        break;

      default:
        break;
    }
  };
  return (
    <div id="progetto14" className="tiny5-regular">
      <div className="layer0">
        <nav
          onMouseOver={handleChangeColor} onMouseLeave={()=>setCol()}
          className={`nav14 ${
            col === "Red"
              ? "nav14Red"
              : `${
                  col === "Green"
                    ? "nav14Green"
                    : `${
                        col === "Yellow"
                          ? "nav14Yellow"
                          : `${
                              col === "Blue"
                                ? "nav14Blue"
                                : `${
                                    col === "Purple"
                                      ? "nav14Purple"
                                      : "nav14Col"
                                  }`
                            }`
                      }`
                }`
          } ${nascondi ? "larg14chiuso" : "larg14aperto"}`}
        >
          <ul className={`ul14 ${nascondi ? "chiuso14" : ""}`}>
            <li id="ul14li" onMouseOver={handleChangeColor} className={`first14ul ${col==="Red"&&`colorText14Green`}`}>Home</li>
            <li id="ul14li" onMouseOver={handleChangeColor} className={col==="Green"&&`colorText14Red`}>Contatti</li>
            <li id="ul14li" onMouseOver={handleChangeColor} className={col==="Yellow"&&`colorText14Purple`}>Shop</li>
            <li id="ul14li" onMouseOver={handleChangeColor} className={`last14ul ${col==="Blue"&&`colorText14Orange`}`}>Link</li>
          </ul>
          <div
            className="button14"
            onMouseOver={handleChangeColor}
            onClick={() => setNascondi(!nascondi)}
          >
            <div className={`button14-linea1 anim14 ${col==="Purple"?"colorButton14Yellow":"colorButton14"}`}>ciao</div>
            <div className={`button14-linea2 anim14 ${col==="Purple"?"colorButton14Yellow":"colorButton14"}`}></div>
          </div>
        </nav>
      </div>
      <div className="sup14"></div>
      <div className="inf14"></div>
    </div>
  );
}

export default Progetto14;
