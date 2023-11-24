import { useEffect, useState } from "react"
import "../../indexProgetto10.css"
function Progetto10() {
  const[refresh,setRefresh]=useState(0)
  const [data,setData]=useState();
  const handleRefresh=()=>{
    setRefresh((prev)=>prev+1)
    console.log(refresh);
  }
  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
  headers: {
    'Accept': 'application/json'
  }
})
    .then((res)=>res.json())
    .then((res)=>setData(res))
  },[refresh]);
  return (
    <div className="flex justify-center items-center bg-sky-600 w-screen p-8">
      <div className="flex w-1/2 p-4 g-4 rounded-xl flex-col bg-orange-600 justify-center">
        <h1 className=" text-5xl w-full h-20 ombratroca text-center mb-32 text-sky-600 font-bold">Don't Laugh Challenge</h1>
        {data?<p className="w-full text-2xl text-center mb-32 font-bold">{data.joke}</p>:""}
         <button className=" m-auto p-3 bg-sky-600 font-bold text-white rounded-xl text-3xl" onClick={handleRefresh}>New Joke</button> 
      </div>
    </div>
  )
}

export default Progetto10
