import React from "react";

function OneProject (props){
    return (
        <a className="projectObject" href={props.link}>
            <div className="backgroundimage" style={{backgroundImage: `url("${props.img}")`}}>
                
                <div className="projectObjectinside">
                    <h2 className="text-3xl font-bold text-white">{props.title}</h2>
                    <p className="text-md text-white mt-8">{props.undertitle}</p>
                </div>
                  
            </div>
        </a>
        
    );
}

function Projects () {

    return(
        <div className="w-full pb-16 bg-gray-800 snap-center flex justify-center flex-wrap">
            <div className="w-full items-center flex justify-center text-center">
                <div className="w-[45%] text-4xl text-center flex flex-col items-center mb-48">
                <p className="text-white font-normal mt-48">
                    I'm Wendy Ju, a UIUX designer based in NYC, who's passionate about creating digital experiences through problem-solving. I'm all about combining visual design with product thinking to bring meaningful experiences alive.
                </p>
                <div className=" w-10 h-2 rounded-lg bg-white mt-14" id="projects"></div>
                </div>
            </div>
            
            {/*<div className=" w-full justify-center mt-8 flex">
             <h2 className="font-special mb-20 text-6xl text-white">My Projects</h2> 
            </div> */}
            
            
            <OneProject img="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                title="Unity"
                undertitle="some undertitle"
                link="/home"
            />

            <OneProject img="https://images.unsplash.com/photo-1644245937251-a56c28e9897b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                title="WRO"
                undertitle="some undertitle"
            />


            <OneProject
            title="Raspberry Pi"
            link="/RaspberryPi"
             />
            <OneProject 
            title="PC"
            />
            <OneProject 
            title="Website"
            
            />
                        

        </div>
        );
}



export default Projects;