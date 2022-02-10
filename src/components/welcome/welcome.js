import React from "react";


function Welcome() {
  return (
    <div className="fullpage w-full h-screen snap-center text-white flex flex-col justify-center items-center relative">
      <h1 className=" font-special  text-9xl font-black ">Hi, I'm Jannik</h1>
      <p className=" mt-8 font-bold font-mono text-3xl">Student / Hobby Programmer</p>
      <div className=" absolute h-32 w-full bottom-10 flex items-center justify-center flex-col">
        <p className=" font-bold font-mono text-xl mb-5">Scroll Down</p>
        <i class="fas fa-arrow-down font-serif text-5xl font-normal"></i>
      </div>
      
    </div>
  );
}

export default Welcome;
