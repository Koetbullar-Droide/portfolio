import React from "react";
import App from "./App";
import About from "./components/About/about";
import RaspberryPi from "./components/projects/UnderProjects/RaspberryPi/raspberrypi";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Routing () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/RaspberryPi' element={<RaspberryPi/>} />
            </Routes>
        </Router>
    );
    
}

export default Routing;