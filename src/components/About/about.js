import React from "react";
import TopNavigation from "../TopNavigation";
import Sidebar from "../Sidebar/sidebar";

function About () {
    return (
        <div className="p-0">
            <Sidebar/>
            <TopNavigation/>
            <div className=" bg-gray-800 w-full text-white text-center flex justify-center items-center flex-col p-0" id="about">
                
                
                
                <div className=" lg:w-[45%] w-[80%] items-center flex flex-col">
                    <h2 className="font-special text-4xl md:text-6xl mt-36 inline-block lg:self-start" >😉 About Jannik</h2>
                    <div className="profilimage"></div>
                    <p className=" font-normal text-base md:text-2xl">
                    Ich bin gerade Schüler an der Oberstufe in Niederrohrdorf. Ich gehe in die Bezirksschule und werde voraussichtlich im Sommer 2023 die Schule verlassen. Wie Sie hoffentlich schon gesehen haben, beschäftige ich mich viel mit der Informatik. In diesem schnell wachsenden Gebiet sehe ich meine Zukunft. Entschlossen möchte ich eine Lehre als Applikationsentwickler beginnen, um meine Neugierde zu stillen und den weiten Jungle bis in die Tiefe zu erkunden. Dabei möchte ich meine Kompetenzen stetig verbessern um am Ende eine soziale, kommunikative und kompetente Persönlichkeit mit weit umfassendem Wissen in der Informatik zu sein. Ich hoffe wir können dieses Ziel gemeinsam erreichen und auch beide davon profitieren. Verweilen Sie doch noch eine Weile auf dieser Website um sich zu vergewissern. Aber vergessen Sie nicht,  mich auch zu kontaktieren, so dass wir uns bald persönlich kennen lernen.
                    </p>
                    <div className="w-full flex flex-row flex-wrap mt-20 mb-20">


                        <div className=" self-start w-[50%] text-left mt-10 mb-5">
                            <h3 className=" text-lg md:text-3xl font-bold mb-5">Meine Interessen ❤️</h3>
                            <ul className=" self-start font-semibold text-base md:text-2xl text-red-600 uppercase">
                                <li>programmieren   💻</li>
                                <li>Pfadfinder      🌲</li>
                                <li>Badminton       🏸</li>
                                <li>Filme            🎬</li>
                            </ul>
                        </div>

                        <div className=" self-start w-[50%] text-left mt-10 mb-5">
                            <h3 className=" text-lg md:text-3xl font-bold mb-5">Meine Stärken 💪</h3>
                            <ul className=" self-start font-semibold text-base md:text-2xl text-red-600 uppercase">
                                <li>zielorientiert   🏁</li>
                                <li>höflich             </li>
                                <li>freundlich         🤗</li>
                                <li>Teamplayer         👥</li>
                            </ul>
                        </div>

                        <div className=" w-full bg-white h-[0.1rem] mt-10"></div>

                        <div className=" self-start w-[50%] text-left mt-10 mb-5">
                            <h3 className=" text-lg md:text-3xl font-bold mb-5">Sprachen    💬</h3>
                            <ul className=" self-start font-semibold text-sm md:text-2xl uppercase">
                                <li>Deutsch (Muttersp.) 🇩🇪</li>
                                <li>Englisch (5 J.)     🇬🇧</li>
                                <li>Französisch (2 J.) 🇫🇷</li>
                            </ul>
                        </div>

                        <div className=" self-end w-[50%] text-left mt-10 mb-5">
                            <h3 className=" text-lg md:text-3xl font-bold mb-5">Schulbildung 🏫</h3>
                            <ul className=" self-start font-semibold text-sm md:text-2xl uppercase">
                                <li>2. Bez</li>
                                <li>1.Bez</li>
                                <li>Primarschule</li>
                            </ul>
                        </div>
                        
                        
                        
                        
                    </div>
                    
                    

                </div>
            </div>
        </div>
        
    );
}

export default About;