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
    <div className="flex flex-col justify-center w-screen">
      <img
        className=" z-0 absolute w-screen video"
        src="/videoSfondo.jpg"
      />
      <picture className="flex z-30 justify-center sfondoLogo items-center w-full h-48 m-4 rounded-2xl">
      <Link to="/"><img src="/logo.gif" className="h-28  w-48" alt="bho" /></Link>
      </picture>
      
      <div
        onClick={handleShow}
        className="z-50 absolute menuSfera bg-green-700 w-36 h-36  rounded-full text-right "
      >
        <h1 id="menuBottone" className={stileTesto}>
          {testo}
        </h1>
      </div>
      <div id="menu" className={show}></div>
      <div className="absolute left-4 bottom-32 flex flex-col gap-20">
      <Link to="/"
          id="voci"
          style={open ? { display:"block" } : { display:"none" }}
          className={
            open
              ? "text-white font-bold z-50 relative "
              : "text-white font-bold z-50 relative "
          }
        >
          Home
        </Link>
        <Link to="/progetti"
          id="voci"
          style={open ? { display:"block" } : { display:"none" }}
          className={
            open
              ? "text-white font-bold z-50 relative "
              : "text-white font-bold z-50 relative "
          }
        >
          Progetti
        </Link>
        
        <div
          id="voci"
          style={open ? { display:"block" } : { display:"none" }}
          className={
            open
              ? " text-white font-bold z-50 relative "
              : "text-white font-bold z-50 relative "
          }
        >
          <a href="https://drive.google.com/drive/folders/1Fg7a4fxJqRPf8VjukPRfgxntctKtdQPP?usp=sharing">Scarica CV</a>
        </div>
      </div>

      <div id="container">
        <Outlet />
      </div>
      <Link to="/progetti" className="z-50 bg-black rounded-xl mx-auto w-5/6"><h1 id="voci" className="w-full text-4xl text-center p-12 text-white">Guarda tutti i progetti</h1></Link>
    </div>
  );
}

export default Layout;
