import React from "react";


function Footer () {


    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    return (
        <div className=" mb-10 w-full h-[10vh] bg-gray-800 flex justify-center items-center text-gray-300 flex-col font-normal mt-7" id="contact">
            <a href="https://github.com/Koetbullar-Droide" className=" text-base md:text-lg">Designed & Build By Jannik Lüthi</a>
            <button onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-up text-2xl mt-3"></i>
                
            </button>
        </div>
    )
}

export default Footer;