import React from "react";

function OneProject (props){
    return (
        <div className="projectObject" style={{backgroundImage: `url("${props.img}")`}}>
                
                <div className="projectObjectinside">
                    <h2 className="text-3xl font-bold text-white">{props.title}</h2>
                    <p className="text-md text-white mt-8">{props.undertitle}</p>
                </div>
                  
        </div>
    );
}

function Projects () {

    return(
        <div className="w-full pb-16 bg-gray-800 snap-center flex justify-center flex-wrap">
            <div className=" w-full justify-center mt-8 flex">
               <h2 className="font-special text-5xl text-white">My Projects</h2> 
            </div>
            
            <OneProject img="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                title="Hello"
                undertitle="some undertitle"
            />

            <OneProject img="https://images.unsplash.com/photo-1644245937251-a56c28e9897b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                title="Hello"
                undertitle="some undertitle"
            />


            <OneProject />
            <OneProject />
            <OneProject />
                        

        </div>
        );
}



export default Projects;