import React from "react";


function Footer () {


    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    return (
        <div className=" w-full h-[15vh] bg-gray-800 flex justify-center items-center text-gray-300 flex-col font-normal" id="contact">
            <a href="https://github.com/Koetbullar-Droide" className=" text-base md:text-lg">Designed & Build By Jannik Lüthi</a>
            <button onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-up text-2xl mt-3"></i>
                
            </button>
        </div>
    )
}

export default Footer;