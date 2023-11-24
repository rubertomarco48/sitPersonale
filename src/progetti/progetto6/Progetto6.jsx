import { Div } from "./Div"
import { Titolo } from "./Titolo"
import '../../indexProgetto6.css'
function Progetto6() {
const boxes = document.querySelectorAll('#boxyz')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
    console.log("ok")
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('showxyz')
           
        } else {
            box.classList.remove('showxyz')
           

        }
    })
}
  return (
    <div className="flex flex-col items-center" id="main">
      <Titolo/>
      <Div none={true}/>
      <Div none={true}/>      
      <Div id="boxyz" verso="boxesDx"/>
      <Div id="boxyz" verso="boxesSx"/>
   
      <Div id="boxyz" verso="boxesDx"/>
      <Div id="boxyz" verso="boxesSx"/>
    
      <Div id="boxyz" verso="boxesDx"/>
      <Div id="boxyz" verso="boxesSx"/> 
      
      <Div id="boxyz" verso="boxesDx"/>
      <Div id="boxyz" verso="boxesSx"/>
      
      <Div id="boxyz" verso="boxesDx"/>
      <Div id="boxyz" verso="boxesSx"/>      
      <Div id="boxyz" verso="boxesDx"/>
      <Div id="boxyz" verso="boxesSx"/>      
      <Div id="boxyz" verso="boxesDx"/>  
    </div>
  )
}

export default Progetto6
