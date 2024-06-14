import { useEffect, useState } from "react";

const FrameLiquido=({q})=>{
    const [count,setCount]=useState(q)
    
    useEffect(()=>{setCount(q);console.log(count)},[q])
    return(
        <div id="frameLiquido">
            <div id="contenitore16" style={{height:`${100-((2-count)*50)}%`}} className={count==2&&"tondo16"} >{count!=0 && `${count} Liters`}
            </div>
            <div id="bianco16" style={{height:`${(2-count)*50}%`} } className={"fix16fisso"}>{count===2?"":`${(2-count)*50}%`}</div>
        </div>
    )
}
export default FrameLiquido;