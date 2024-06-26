import { useState } from "react";
import { Outlet,Link } from "react-router-dom";

function Layout() {
  const [show, setShow] = useState(" w-60 z-40 menuContainer bg-green-700");
  const [stileTesto, setStileTesto] = useState("font-bold open");
  const [testo, setTesto] = useState("MENU");
  const [open, setOpen] = useState(false);

  const close = () => {
    if (show === " w-60 z-40 menuContainer bg-green-700 showMenu") {
      setShow(" w-60 z-40 menuContainer bg-green-700");
      setTesto("MENU");
      setStileTesto("font-bold open");
      setOpen(false);
    }
  };
  window.addEventListener("scroll", close);
  const handleShow = () => {
    if (show === " w-60 z-40 menuContainer bg-green-700") {
      setShow(" w-60 z-40 menuContainer bg-green-700 showMenu");
      setTesto("X");
      setStileTesto("text-3xl relative close font-bold");
      setOpen(true);
    } else {
      setShow(" w-60 z-40 menuContainer bg-green-700");
      setTesto("MENU");
      setStileTesto("font-bold open");
      setOpen(false);
    }
  };
  return (
    <div id="boh" className="flex flex-col items-center w-full bg-green-600 ">
      {/* <img
        id="sfondoPrincipale"
        className="z-0 absolute h-full w-full video object-cover"
        src="/videoSfondo.jpg"
      /> */}
      {/* <picture className="flex z-30 justify-center sfondoLogo items-center w-full h-48  rounded-2xl">
      <Link to="/"><img src="/logo.gif" className="h-28  w-48" alt="bho" /></Link>
      </picture> */}
      <div id="mobileTitle" className=" bg-black flex justify-evenly barra w-full h-12 text-white">
        <h1  className="pixel text-xl ml-2 flex items-center"><Link to="/">Marco Ruberto</Link></h1>
        <div className="pixel text-xl flex items-center"><Link to="/progetti"
          id="vociMobile"
          className=" hidden text-xl"
          
        >
          Progetti
        </Link>
        </div>
        <div className="pixel text-xl flex items-center">
          <a target="_blank" rel="noopener noreferrer" id="vociMobile" className="hidden text-xl mr-2" href="https://drive.google.com/drive/folders/1Fg7a4fxJqRPf8VjukPRfgxntctKtdQPP?usp=sharing">Scarica CV</a>
        </div>
        
      </div>
      
      <div
      id="containerBottone"
        onClick={handleShow}
        className="z-50 absolute menuSfera bg-green-700 w-36 h-36   rounded-full text-right "
      >
        <h1 id="menuBottone" className={stileTesto}>
          {testo}
        </h1>
      </div>
      <div id="menu" className={show}></div>
      <div id="hiddenMenu" className=" fixed z-40 left-4 bottom-32 flex flex-col gap-20">
      <Link to="/"
          id="voci"
          style={open ? { display:"block" } : { display:"none" }}
          className={
            open
              ? "text-white font-bold  relative "
              : "text-white font-bold  relative "
          }
        >
          Home
        </Link>
        <Link to="/progetti"
          id="voci"
          style={open ? { display:"block" } : { display:"none" }}
          className={
            open
              ? "text-white font-bold  relative "
              : "text-white font-bold  relative "
          }
        >
          Progetti
        </Link>
        
        <div
          id="voci"
          style={open ? { display:"block" } : { display:"none" }}
          className={
            open
              ? " text-white font-bold relative "
              : "text-white font-bold relative "
          }
        >
          <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1Fg7a4fxJqRPf8VjukPRfgxntctKtdQPP?usp=sharing">Scarica CV</a>
        </div>
      </div>

      <div id="container" onClick={close} className="mt-12">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
