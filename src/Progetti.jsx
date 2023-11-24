import { Link } from "react-router-dom";
const Progetti=()=>{
    return(
        <div className="flex flex-wrap justify-between gap-6 p-12">
            <Link to="/progetto1" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls=""  src="/day1.mp4"></video>
            </Link>
            <Link to="/progetto2" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls=""  src="/day2.mp4"></video>
            </Link>
            <Link to="/progetto3" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls=""  src="/day3.mp4"></video>
            </Link>
            <Link to="/progetto4" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls="" src="/day4.mp4"></video>
            </Link>
            <Link to="/progetto5" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls=""  src="/day5.mp4"></video>
            </Link>
            <Link to="/progetto6" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls="" src="/day6.mp4"></video>
            </Link>
            <Link to="/progetto7" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls="" src="/day7.mp4"></video>
            </Link>
            <Link to="/progetto8" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls="" src="/day8.mp4"></video>
            </Link>
            <Link to="/progetto9" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls="" src="/day9.mp4"></video>
            </Link>
            <Link to="/progetto10" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls="" src="/day10.mp4"></video>
            </Link>
            <Link to="/progetto11" className=" w-1/5 flex justify-center items-center rounded-xl border-4 border-slate-50 zoom">
            <video autoPlay loop muted controls="" src="/day11.mp4"></video>
            </Link>
        </div>
    )
}
export default Progetti;