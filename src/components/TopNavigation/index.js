import React from "react";


function TopNavigation() {
  return (
    <div className="top-bar">
      <ul className=" flex mr-8 absolute right-1">
        <a href="/"><li className="icons-top"><i class="fas fa-home fa-md mr-2"></i>Home</li></a>
        <a href="/about"><li className="icons-top"><i class="fas fa-address-card fa-md mr-2"></i>About</li></a>
        <a><li className="icons-top"><i class="fas fa-book fa-md mr-2"></i>Story</li></a>
      </ul>
      <ul>
        <a href="/">
          <li className=" ml-8 font-bold font-special text-xl"> Jannik's Website</li>
        </a>
        
      </ul>
    </div>
  );
}

export default TopNavigation;
