import React from "react";


function Welcome() {
  return (
    <div className="fullpage w-full h-screen snap-center text-white flex flex-col justify-center items-center relative" id="welcome">
      <div className="flex flex-col items-left">
        <p className=" mt-8 font-bold font-mono text-base md:text-2xl">Hi, Mein Name ist</p>
        <h1 className=" font-special text-6xl  md:text-9xl font-black ">Jannik Lüthi</h1>
        <p className=" mt-8 font-bold font-mono text-base md:text-2xl ">Ich bin Schüler und Hobby Programmierer</p>
      </div>
      
      <div className=" absolute h-32 w-full bottom-10 flex items-center justify-center flex-col">
        
        <p className=" font-bold font-mono text-base md:text-xl mb-5">Scroll Down</p>
        <button onClick={
          () => {document.getElementById('smallaboutme').scrollIntoView({ behavior: 'smooth' });}
        } className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-30">
          <i class="fa-solid fa-arrow-down text-2xl md:text-5xl font-normal"></i>
        </button>
        
      </div>
      
    </div>
  );
}

export default Welcome;
