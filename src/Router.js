import React from "react";
import App from "./App";
import About from "./components/About/about";
import RaspberryPi from "./components/projects/UnderProjects/RaspberryPi/raspberrypi";
import WRO from "./components/projects/UnderProjects/WRO/wro";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Unity from "./components/projects/UnderProjects/Unity/unity";
import Pc from "./components/projects/UnderProjects/Pc/pc";
import Resume from "./components/resume/resume";

function Routing () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/RaspberryPi' element={<RaspberryPi/>} />
                <Route path='/WRO' element={<WRO/>} />
                <Route path='/Unity' element={<Unity/>} />
                <Route path='/Pc' element={<Pc/>} />
                <Route path='/resume' element={<Resume/>} />
            </Routes>
        </Router>
    );
    
}

export default Routing;