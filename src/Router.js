import React from "react";
import App from "./App";
import About from "./components/About/about";
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
            </Routes>
        </Router>
    );
    
}

export default Routing;