import { useState } from 'react';
import FrameLiquido from './FrameLiquido';
import Nav16 from './Nav16';
import '../../indexProgetto16.css'


function Progetto16() {
  const [counter,setCounter]=useState(2)
  const handleDrink=(e)=>{
    const num = Number(e.target.id)
    console.log(num)
    const bicchiere=document.getElementById(`${num}`)
    console.log(bicchiere.className)
    if (bicchiere.className==="bicchiere blue16") {
      bicchiere.className="bicchiere trasp16"
      setCounter(counter-0.25)
    }else{
      bicchiere.className="bicchiere blue16"
      setCounter(counter+0.25)
    }
  }
  return (
  <div id="progetto16">
    <Nav16/>
    <FrameLiquido q={counter}/>
    <h3 style={{fontWeight:"bold"}}>Select how many glasses of water that you have drank</h3>
    <div id="containerBicchieri">
            <div id='0' onClick={handleDrink} className={`bicchiere blue16`}></div>
            <div id='1' onClick={handleDrink} className={`bicchiere blue16`}></div>
            <div id='2' onClick={handleDrink} className={`bicchiere blue16`}></div>
            <div id='3' onClick={handleDrink} className={`bicchiere blue16`}></div>
            <div id='4' onClick={handleDrink} className={`bicchiere blue16`}></div>
            <div id='5' onClick={handleDrink} className={`bicchiere blue16`}></div>
            <div id='6' onClick={handleDrink} className={`bicchiere blue16`}></div>
            <div id='7' onClick={handleDrink} className={`bicchiere blue16`}></div>
    </div>
  </div>
  )
}

export default Progetto16;
