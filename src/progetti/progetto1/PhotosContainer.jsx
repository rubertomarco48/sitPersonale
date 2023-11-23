import { useState } from "react";
import { Photo } from "./Photo";
import { Link } from "react-router-dom";
import "./index.css"
export function PhotoContainer() {
  const array = [
    "w-1/6 h-full cursor-pointer flex items-center ",
    "w-1/6 h-full cursor-pointer flex items-center ",
    "w-1/6 h-full cursor-pointer flex items-center ",
    "w-1/6 h-full cursor-pointer flex items-center ",
    "w-1/6 h-full cursor-pointer flex items-center ",
  ];

  const id = [0, 1, 2, 3, 4];
  const [classi, setClassi] = useState(array);
  const src = [
    "./src/progetti/progetto1/assets/image1.jpg",
    "./src/progetti/progetto1/assets/image2.png",
    "./src/progetti/progetto1/assets/image3.jpg",
    "./src/progetti/progetto1/assets/image4.jpg",
    "./src/progetti/progetto1/assets/image5.jpg",
  ];
  const click = (e) => {
    setClassi(array);
    let temp = [...array];
    temp.splice(e.target.id, 1, "w-1/2 h-full cursor-pointer flex items-center  transition-all");
    setClassi(temp);
  };

  const photosJSX = id.map((element) => {
    for (let i = 0; i < 5; i++) {
      return (
        <Photo
          numero={element}
          src={src[element]}
          stile={classi[element]}
          func={click}
        />
      );
    }
    return;
  });

  return <div id="p1" className="flex gap-8 h-screen w-full p-8">{photosJSX}</div>;
}