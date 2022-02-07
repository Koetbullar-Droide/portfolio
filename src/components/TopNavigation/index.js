import React from "react";


function TopNavigation() {
  return (
    <div className="top-bar">
      <ul className=" flex mr-8 absolute right-1">
        <li className="icons-top"> <i class="fas fa-home fa-md mr-2"></i>Home</li>
        <li className="icons-top"><i class="fas fa-address-card fa-md mr-2"></i>About</li>
        <li className="icons-top"><i class="fas fa-book fa-md mr-2"></i>Story</li>
      </ul>
      <ul>
        <li className=" ml-8 font-bold font-mono text-xl"> Jannik's Website</li>
      </ul>
    </div>
  );
}

export default TopNavigation;
