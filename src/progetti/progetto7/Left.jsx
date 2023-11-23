export const Left = () => {
  return (
    <div
      className="h-full leftxyz flex justify-center items-center init" onMouseEnter={() => {
        const left = document.querySelector(".leftxyz");
        const right = document.querySelector(".rightxyz");
        left.addEventListener("mouseenter", () =>{
          left.classList.remove("init")
          right.classList.remove("init")
          left.classList.remove("trenta")  
          left.classList.add("unhover")
            right.classList.remove("unhover")
            right.classList.add("trenta")
        }
        );
        left.addEventListener("mouseleave",()=>{
          left.classList.remove("init")
          right.classList.remove("init")
          left.classList.remove("unhover")
          left.classList.add("trenta")
          right.classList.remove("trenta")
          right.classList.add("unhover")
        }
        )
      }}
    >
      <div className="container1xyz">
        <h1 className=" text-6xl h-24 text-white opacity-100">PlayStation</h1>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
