import React, { useState, useRef, useEffect } from "react";


function TopNavigation() {
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  function scrollTo(id) {
    setDropdown(!dropdown);
    if(!window.location.pathname.split('/').pop() == ''){

      window.location.href='/#' + id;


      
    } else {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
    
   
  }
  
  

  return (
    <div className={navbar ? 'top-bar' : 'transparent-bar'}>


      <div className="md:desktopTopBar hidden md:flex">
        <ul className=" mr-8 absolute right-1 not-italic flex items-center">
        <button onClick={() => scrollTo('projects')}><li className="icons-top"><i class="fa-solid fa-flask mr-2 not-italic"></i>Projects</li></button>
        <button onClick={() => scrollTo('about')}><li className="icons-top"><i class="fas fa-address-card fa-md mr-2"></i>About</li></button>
        <a href="/resume"><li className="icons-top"><i class="fa-solid fa-file fa-md mr-2"></i>Resume</li></a>
        <button onClick={() => scrollTo('contact')} className=" border-2 rounded-md h-[5vh] p-0 flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"><li className="font-normal text-xl my-0 mx-3">Contact</li></button>
      </ul>
      <ul>
        <button onClick={() => scrollTo('welcome')}>
          <li className=" ml-8 font-special text-2xl font-black hover:border-b-2"> Jannik Lüthi</li>
        </button>
        
      </ul>
      </div>




      <div className="md:hidden flex">

        

        <div className={dropdown ?  "mobilTopBaropen" : "mobilTopBarclosed"}>

          <ul className=" absolute right-1 not-italic flex items-center justify-center w-full h-full flex-col">

            <button onClick={() => scrollTo('welcome')}><li className="icons-top"><i class="fas fa-home fa-md mr-2"></i>Start</li></button>
            <button onClick={() => scrollTo('projects')}><li className="icons-top"><i class="fa-solid fa-flask mr-2 not-italic"></i>Projects</li></button>
            <button onClick={() => scrollTo('about')}><li className="icons-top"><i class="fas fa-address-card fa-md mr-2"></i>About</li></button>
            <a href="/resume"><li className="icons-top"><i class="fa-solid fa-file fa-md mr-2"></i>Resume</li></a>

            <button onClick={() => scrollTo('contact')} className=" border-2 rounded-md h-[5vh] p-0 flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"><li className="font-normal text-xl my-0 mx-3">Contact Me</li></button>
          </ul>

        </div>
        

      <ul className=" flex items-center w-screen justify-between">
        
      <button onClick={() => scrollTo('welcome')}>
          <li className=" ml-8 font-special text-2xl font-black hover:border-b-2"> Jannik Lüthi</li>
        </button>
        
        
          <button className="icons-top z-20 " onClick={() => {setDropdown(!dropdown)}} > <i class="fa-solid fa-bars not-italic mr-3"></i></button>
      </ul>
      </div>
      
    </div>
  );



}

export default TopNavigation;
