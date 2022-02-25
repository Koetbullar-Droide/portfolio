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
        <div className="w-full pb-16 bg-gray-800 snap-center flex justify-center flex-col md:flex-row items-center md:flex-wrap" id="smallaboutme">
            <div className="w-full items-center flex justify-center text-center">
                <div className="md:w-[45%] w-[70%] text-lg md:text-4xl text-center flex flex-col items-center mb-28 md:mb-48">
                <p className="text-white font-normal mt-28 md:mt-48">
                    Ich bin Jannik Lüthi, lebe in Niederrohrdorf und meine Leidenschaft ist die Informatik. Schon früh fand ich meine Neugierde in der Technik und möchte auch in Zukunft mehr eintauchen. Viele Projekte habe ich schon in diesem Gebiet gemacht. Hier sind einige zusehen.
                </p>
                <div className=" w-10 h-1 md:h-2 rounded-lg bg-white mt-14" id="projects"></div>
                </div>
            </div>
            
            {/*<div className=" w-full justify-center mt-8 flex">
             <h2 className="font-special mb-20 text-6xl text-white">My Projects</h2> 
            </div> */}
            
            
            <OneProject img="https://static.techspot.com/images2/news/bigimage/2019/03/2019-03-18-image-24.jpg"
                title="Unity Engine"
                undertitle="#GameDev"
                link="/Unity"
            />
            <OneProject 
                title="Diese Website"
                undertitle="#JavaScript #React #GitHub"
                link="https://github.com/Koetbullar-Droide/portfolio"
                img="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        
            />
            <OneProject img="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                title="World Robot Olympiad"
                undertitle="#Robot #WRO"
                link="/WRO"
            />


            <OneProject
            title="Raspberry Pi"
            undertitle="#Nextcloud #Server"
            link="/RaspberryPi"
            img="https://images.unsplash.com/photo-1631553127988-36343ac5bb0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzcGJlcnJ5JTIwcGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
             />
            <OneProject 
            title="PC"
            undertitle="#OwnPc #Hardware"
            link="/Pc"
            img="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            />
            
                        

        </div>
        );
}



export default Projects;