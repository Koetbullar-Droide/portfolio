import React, { useState, useRef, useEffect } from "react";


function TopNavigation() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  function scrollTo(id) {
    if(!window.location.pathname.split('/').pop() == ''){

      window.location.href='/#' + id;


      
    } else {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
    
    
   
  }
  

  return (
    <div className={navbar ? 'top-bar' : 'transparent-bar'}>
      <ul className=" mr-8 absolute right-1 not-italic flex items-center">
        <button onClick={() => scrollTo('welcome')}><li className="icons-top"><i class="fas fa-home fa-md mr-2"></i>Start</li></button>
        <a href="/about"><li className="icons-top"><i class="fas fa-address-card fa-md mr-2"></i>About</li></a>
        <button onClick={() => scrollTo('projects')}><li className="icons-top"><i class="fa-solid fa-flask mr-2 not-italic"></i>Projects</li></button>
        <button onClick={() => scrollTo('contact')} className=" border-2 rounded-md h-[5vh] p-0 flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"><li className="font-normal text-xl my-0 mx-3">Contact Me</li></button>
      </ul>
      <ul>
        <a href="/">
          <li className=" ml-8 font-special text-2xl font-black hover:border-b-2"> Jannik's Website</li>
        </a>
        
      </ul>
    </div>
  );



}

export default TopNavigation;
