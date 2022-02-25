import React from "react";

function ContactMe () {
    return (
        <div className=" w-full h-[60vh] bg-gray-800 flex justify-center items-center text-white flex-col font-normal text-lg md:text-2xl" id="contact">
            <h2 className=" my-16 text-6xl md:text-7xl font-special">Interessiert?</h2>
            <p className=" mb-2">Du magst mich und möchtest Kontakt mit mir?</p>
            <p className="mb-8">Keine Scheue und schreibe mir eine Mail.</p>
            <a href="mailto:jannik.luethi@ksrb.ch" className=" md:border-2 border rounded-md h-10 md:h-16 p-5 flex items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"><p className=" font-normal text-lg md:text-3xl my-0 mx-3">Schreib ein Mail</p></a>
            <a href="mailto:jannik.luethi@ksrb.ch"><p className="mb-8 mt-4 text-sm md:text-lg font-light underline text-blue-500">jannik.luethi@ksrb.ch</p></a>
        </div>
    )
}

export default ContactMe;