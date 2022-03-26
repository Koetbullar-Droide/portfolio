import React from "react";
import TopNavigation from "../../../TopNavigation";
import Sidebar from "../../../Sidebar/sidebar";
import Footer from "../../../Footer/footer";



function OverviewSection (props) {
    return (
        <div>
            <Sidebar/>
            <TopNavigation/>
            <div className=" h-full min-h-[90vh] w-full bg-gray-800 text-white flex items-center justify-center">
                <div className="w-[70%] h-full ">
                    <h1 className=" text-6xl font-special font-bold mt-20">{props.title}</h1>
                    <div className=" mt-12 bottom-10 flex flex-col">
                        <div className=" md:w-[80%] font-normal text-2xl md:self-start ">
                            <p>
                                {props.description}
                            </p>
                        </div>
                        <div className=" mt-11 mb-11 md:self-end font-normal text-2xl text-right">
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
        className=" w-full h-[90vh] fullpagee bg-center bg-cover bg-fixed"
        style={{backgroundImage: `url("${props.image}")`}}
        >

        </div>
    );
}

function TextSection (props) {
    return (
        <div className=" w-full flex items-center justify-center bg-gray-800 text-white">
            <div className=" md:w-[60%] w-[90%]">
                <h2 className=" font-special text-4xl font-semibold mt-20 mb-14">{props.title}</h2>
                <p className="font-normal text-xl">{props.text}</p>
                {props.children}
                
                

            </div>
            

        </div>
    );
}



function End (props) {
    return (
        <div>
            <div className="w-full flex items-center justify-center bg-gray-800 text-white">
            <div className=" font-normal text-2xl flex my-20 justify-center items-center w-full h-20">
                        <a href={props.lastproject} className=" self-start hover:line-through hover:cursor-pointer" >Letztes Projekt</a>
                        <a href={props.nextproject} className=" self-end hover:line-through hover:cursor-pointer" >Nächstes Projekt</a>
                    </div>
            </div>
            <Footer/>
        </div>
        
    );
    
}

function Image (props) {
    return (
        <div className="image-background md:w-[60%] w-full h-[40vh] rounded-sm m-5" style={{backgroundImage: `url("${props.url}")`}}></div>
    );

}

function ImagesPlace (props) {
    return (
    <div className="flex items-center justify-center bg-gray-800 w-full">
        <div className="md:w-[60vw] w-[90vw] flex items-center justify-center bg-gray-800 flex-wrap">
            {props.children}
        </div>
    </div>
        
    );
}

export {OverviewSection, MainImage, TextSection, End, Image, ImagesPlace};