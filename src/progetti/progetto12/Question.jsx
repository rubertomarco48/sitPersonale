import { useState } from "react"

export const Question=({question,answer})=>{
    const [open,setOpen]=useState(false);
    return (
    <>
    <div id="anima" className={!open ? "sf h-30 w-1/2 border-black border-2 rounded-2xl flex flex-col items-start" : "sfond h-56 w-1/2 border-black border-2 rounded-2xl flex flex-col items-start"}>
        <div className="p-4 w-full flex flex-row justify-between">
        <h2 className=" h-full font-extrabold text-2xl flex justify-center items-center">{question}</h2>
        <button className="  h-full  flex justify-center items-center nascosto" onClick={()=>setOpen(!open)} >
            <img id="anima" className={open && "trasf h-full nascosto"} src="/arrow12.png" alt="" />
        </button>
        </div>
        <h2 id={open?"vis":"hid"} className="p-4 text-center font-extrabold text-2xl">{answer}</h2>
    </div>
    </>
    )
}