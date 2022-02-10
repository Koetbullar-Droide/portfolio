import React from "react";
import TopNavigation from "../../../TopNavigation";

function RaspberryPi () {
    return (
        <div>
            <TopNavigation/>
            <FirstSection
            title="Raspberry Pi"
            description="
            Hug-i is an IoT interactive light pillow that addresses the need for remote closeness in light of the pandemic and advances in telecommunication. This pulse-sensing pillow that emits light would help people to connect to their loved ones in an alternative and intimate way.
            "
            year="2022"
            kind="individuelles Projekt"
            findings="
            Java, Javascript
            "
            />
            <Image image="https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <SecondSection
            done="
            The pandemic has changed the way the world communicates. Advances in telecommunication make remote communication easier, yet it takes away the intimacy and other sensual feelings people value in interpersonal interactions. Through observing and experiencing the lack of emotional connection between long-distance friends, couples, and family, the need for a new product arises.  
            "
            learned="
            The pandemic has changed the way the world communicates. Advances in telecommunication make remote communication easier, yet it takes away the intimacy and other sensual feelings people value in interpersonal interactions. Through observing and experiencing the lack of emotional connection between long-distance friends, couples, and family, the need for a new product arises.  
            "
            />
        </div>
        
    );
}

function FirstSection (props) {
    return (
        <div>
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

function Image (props) {
    return (
        <div 
        className=" w-full h-[90vh] fullpagee"
        style={{backgroundImage: `url("${props.image}")`}}
        >

        </div>
    );
}

function SecondSection (props) {
    return (
        <div className=" w-full flex items-center justify-center bg-gray-800 text-white">
            <div className=" w-[50%]">
                <h2 className=" font-special text-4xl font-semibold mt-20 mb-14">Was ich machte</h2>
                <p className="font-normal text-xl">{props.done}</p>
                <h2 className="font-special text-4xl font-semibold mt-20 mb-14">Was ich lernte</h2>
                <p className="font-normal text-xl">{props.learned}</p>
                {props.children}
                <div className=" font-normal text-xl flex my-20 justify-center items-center w-full h-20">
                    <a href={props.nextproject} className=" self-start hover:line-through hover:cursor-pointer" >Letztes Projekt</a>
                    <a href={props.nextproject} className=" self-end hover:line-through hover:cursor-pointer" >Nächstes Projekt</a>
                </div>
                

            </div>
            

        </div>
    );
}

export default RaspberryPi;