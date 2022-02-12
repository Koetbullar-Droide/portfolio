import React from "react";

function Sidebar () {
    return (
        <div>
            <div className="h-screen fixed flex items-center  flex-col-reverse text-white text-3xl z-10 ml-5">
            <div className="h-[20vh] bg-white w-[0.1rem] mt-3"></div>
            <a href="mailto:jannik.luethi@ksrb.ch" className="my-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"><i class="fa-solid fa-envelope not-italic"></i></a>
            <a href="https://github.com/Koetbullar-Droide" className="my-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" ><i class="fa-brands fa-github not-italic"></i></a>
            
            
            </div>
            <div className=" fixed h-screen right-0 z-10">
                <div className="h-[50vh] bg-white w-[0.1rem] mr-8 mt-[10vh]"></div>
            </div>
                
        </div>
        
    );
}

export default Sidebar;