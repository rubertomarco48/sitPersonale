import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Layout from "./Layout";
import Contatti from "./Contatti";
/* import Home from "./Home"; */
import Progetti from "./Progetti";
import { PhotoContainer } from "./progetti/progetto1/PhotosContainer";
import Progetto2 from "./progetti/progetto2/Progetto2";
import Progetto3 from "./progetti/progetto3/Progetto3";
import Progetto4 from "./progetti/progetto4/Progetto4";
import Sfondo from "./progetti/progetto5/Sfondo";
import Progetto6 from "./progetti/progetto6/Progetto6";
import Progetto7 from "./progetti/progetto7/Progetto7";
import Progetto8 from "./progetti/progetto8/Progetto8";
import Progetto9 from "./progetti/progetto9/Progetto9";
import Progetto10 from "./progetti/progetto10/Progetto10";
import Progetto11 from "./progetti/progetto11/Progetto11";
import Progetto12 from "./progetti/progetto12/Progetto12";
import Progetto13 from "./progetti/progetto13/Progetto13"
/* import Contatti from "./Contatti"; */
import HomePiuContatti from "./HomePiuContatti";
import CookieBanner from "./Cookie";
import CookiePolicy from "./CookiePolicy";
import Progetto14 from "./progetti/Progetto14/Progetto14";
import Progetto15 from "./progetti/Progetto15/Progetto15";
import Progetto16 from "./progetti/Progetto16/Progetto16";




function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<Layout/>}>
          <Route path="cookie-policy" element={<CookiePolicy/>} />
          <Route index element={<HomePiuContatti/>} />
          <Route path="progetti" element={<Progetti/>}/>
          <Route path="progetto1" element={<PhotoContainer/>} />
          <Route path="progetto2" element={<Progetto2/>} />
          <Route path="progetto3" element={<Progetto3/>} />
          <Route path="progetto4" element={<Progetto4/>} />
          <Route path="progetto5" element={<Sfondo/>} />
          <Route path="progetto6" element={<Progetto6/>} />
          <Route path="progetto7" element={<Progetto7/>} />
          <Route path="progetto8" element={<Progetto8/>} />
          <Route path="progetto9" element={<Progetto9/>} />
          <Route path="progetto10" element={<Progetto10/>} />
          <Route path="progetto11" element={<Progetto11/>} />
          <Route path="progetto12" element={<Progetto12/>} />
          <Route path="progetto13" element={<Progetto13/>} />
          <Route path="progetto14" element={<Progetto14/>} />
          <Route path="progetto15" element={<Progetto15/>} />
          <Route path="progetto16" element={<Progetto16/>} />
          
        </Route>
        
      </Routes>
      <footer id="footerMobile" className="w-full flex flex-col justify-center bg-green-600 p-8">
      <Link to="/progetti" className="z-50 bg-black rounded-xl mx-auto w-5/6"><h1 id="voci" className="w-full text-4xl text-center p-12 text-white">Guarda tutti i progetti</h1></Link>
      <Contatti/>
      <CookieBanner/>
      </footer>
      
    </BrowserRouter>
  );
}

export default App;
