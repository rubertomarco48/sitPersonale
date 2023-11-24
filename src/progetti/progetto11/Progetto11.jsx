import { useState } from "react";
import "../../indexProgetto11.css"
function Progetto11() {
  const [data, setData] = useState();
  const handleChange = (e) => {
    setData({ key: e.key, keyCode: e.keyCode, code: e.code });
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => handleChange(e)}
      className="flex justify-center items-center bg-sky-600 h-screen w-screen"
    >
      {!data && (
        <div className="bg-orange-600 p-6 rounded-2xl">
          <h1 className="w-full h-full text-4xl text-center">Press a key</h1>
        </div>
      )}
      {data && (
        <div className="bg-orange-600 flex gap-7 h-1/3 items-center flex-row p-6 transfufu rounded-2xl">
          <div className=" bg-red-600 p-4 h-5/6 rounded-xl">
          <h1 className=" w-60 h-1/2 text-4xl text-center font-bold text-green-600 ombrafufu">KEY</h1>  
          <h1 className=" w-60 h-1/2 text-4xl text-center">{data.key}</h1> 
          </div>
          <div className=" bg-red-600 p-4 h-5/6 rounded-xl">
          <h1 className=" w-60 h-1/2 text-4xl text-center font-bold text-green-600 ombrafufu">KEYCODE</h1>  
          <h1 className=" w-60 h-1/2 text-4xl text-center">{data.keyCode}</h1>
          </div>
          <div className=" bg-red-600 p-4 h-5/6 rounded-xl">
          <h1 className=" w-60 h-1/2 text-4xl text-center font-bold text-green-600 ombrafufu">CODE</h1>  
          <h1 className=" w-60 h-1/2 text-4xl text-center">{data.code}</h1>
          </div>
                   
                    
                    
        </div>
      )}
    </div>
  );
}

export default Progetto11;
