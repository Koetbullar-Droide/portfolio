import React from "react";
import Footer from "../Footer/footer";
import Sidebar from "../Sidebar/sidebar";
import TopNavigation from "../TopNavigation";

function Resume () {
    return (
        <div>
            <TopNavigation/>
            <Sidebar/>
           <div className=" w-full h-[100vh] bg-gray-900 flex justify-center items-center text-white flex-col font-normal text-lg md:text-2xl" id="contact">
            <h2 className=" my-7 text-6xl md:text-7xl font-special">Download Now!</h2>
            <p className=" mb-2">Hier kannst du meinen Lebenslauf herunterladen.</p>
            <p className=" mb-14"></p>
            <a href="Lebenslauf_Jannik_Luethi.pdf" className=" md:border-2 border rounded-md h-10 md:h-16 p-5 flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"><p className=" font-normal text-lg md:text-3xl my-0 mx-3">Resume</p></a>
            <a href="/"><p className="mb-8 mt-4 text-sm md:text-lg font-light underline text-blue-500">Back Home</p></a>

            </div>
            <Footer/>
        </div>
        
    )
}

export default Resume;