const Contatti=()=>{
    return(
        <div id="contattiMobile" className="flex flex-row justify-around w-11/12 h-40 Nooverflow bg-black rounded-xl p-10 m-10">
            <picture className="flex flex-row h-10 gap-4 Nooverflow ">
                <img src="/email.png" className="w-10" alt="" />
                <caption className=" text-white text-3xl hover:text-yellow-300 "><a target="_blank" rel="noopener noreferrer" className="suOggetto" href= "mailto:rubertomarco48@gmail.com">Inviami una mail!</a> </caption>
            </picture>
            <picture className="flex  flex-row h-10 gap-4">
                <img src="/github.png" className="w-10" alt="" />
                <caption className=" text-white text-3xl hover:text-yellow-300"> <a target="_blank" rel="noopener noreferrer" href="https://github.com/rubertomarco48">Accedi alle mie repo!</a></caption>
            </picture>
            <picture className="flex flex-row h-10  gap-4">
                <img src="/linkedin.png" className="w-10" alt="" />
                <caption className=" text-white text-3xl hover:text-yellow-300"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marco-ruberto-026414149/"> Vai sul mio Profilo!</a></caption>
            </picture>
        </div>
    )
}

export default Contatti