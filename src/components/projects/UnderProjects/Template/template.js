import React from "react";
import TopNavigation from "../../../TopNavigation";
import Sidebar from "../../../Sidebar/sidebar";



function OverviewSection (props) {
    return (
        <div>
            <Sidebar/>
            <TopNavigation/>
            <div className=" h-[80vh] w-full bg-gray-800 text-white flex items-center justify-center">
                <div className="w-[50%] h-full relative">
                    <h1 className=" text-6xl font-special font-bold mt-20">{props.title}</h1>
                    <div className=" absolute bottom-10 flex flex-col">
                        <div className=" w-[40%] font-normal text-2xl self-start ">
                            <p>
                                {props.description}
                            </p>
                        </div>
                        <div className=" self-end font-normal text-2xl text-right">
                            <p>{props.year}</p>
                            <div className=" w-full bg-white h-[2px] my-4"></div>
                            <p>{props.kind}</p>
                            <div className=" w-full bg-white h-[2px] my-4"></div>
                            <p>Erkenntnisse:</p>
                            {props.findings}
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
        
    );
}

function MainImage (props) {
    return (
        <div 
        className=" w-full h-[90vh] fullpagee"
        style={{backgroundImage: `url("${props.image}")`}}
        >

        </div>
    );
}

function TextSection (props) {
    return (
        <div className=" w-full flex items-center justify-center bg-gray-800 text-white">
            <div className=" w-[50%]">
                <h2 className=" font-special text-4xl font-semibold mt-20 mb-14">{props.title}</h2>
                <p className="font-normal text-xl">{props.text}</p>
                
                

            </div>
            

        </div>
    );
}



function End (props) {
    return (
        <div className="w-full flex items-center justify-center bg-gray-800 text-white">
        <div className=" font-normal text-xl flex my-20 justify-center items-center w-full h-20">
                    <a href={props.nextproject} className=" self-start hover:line-through hover:cursor-pointer" >Letztes Projekt</a>
                    <a href={props.nextproject} className=" self-end hover:line-through hover:cursor-pointer" >Nächstes Projekt</a>
                </div>
    </div>
    );
    
}

function ImagesPlace (props) {
    return (
        <div className="w-full flex items-center justify-center bg-gray-800 flex-wrap">
            {props.children}
        </div>
    );
}

export {OverviewSection, MainImage, TextSection, End, ImagesPlace};