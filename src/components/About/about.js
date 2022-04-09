import React from "react";
import TopNavigation from "../TopNavigation";
import Sidebar from "../Sidebar/sidebar";

function About () {
    return (
        <div className="p-0">
            <Sidebar/>
            <TopNavigation/>
            <div className=" bg-gray-900 w-full text-white text-center flex justify-center items-center flex-col p-0" id="about">
                
                
                
                <div className=" lg:w-[60%] w-[85%] items-center flex flex-col">
                    <h2 className="font-special text-4xl md:text-6xl mt-36 inline-block lg:self-start" >😉 About Jannik</h2>
                    <div className="profilimage"></div>
                    <p className=" font-normal text-base md:text-2xl">
                    Zurzeit bin ich Schüler an der Oberstufe in Niederrohrdorf, besuche die Bezirksschule und werde voraussichtlich im Sommer 2023 die Schule abschliessen. Wie Sie hoffentlich auf dieser Website schon gesehen haben, beschäftige ich mich viel mit der Informatik. In meiner Freizeit liebe ich es, Technik-Projekte voran zu treiben. Ausserdem spiele ich auch Badminton und betätige mich ehrenamtlich als Leitperson in der Cevi (Pfadfinder). Die Informatik, in diesem schnell wachsenden Gebiet, sehe ich auch meine Zukunft. Sehr gerne möchte ich eine Lehre als Applikationsentwickler beginnen, um meine grosse Neugier zu stillen. Dabei möchte ich meine Kompetenzen stetig weiter entwickeln, um am Ende eine soziale, kommunikative und kompetente Persönlichkeit mit umfassendem Wissen in der Informatik zu werden.  Ich hoffe, wir können dieses Ziel gemeinsam erreichen, denn ich suche eine Lehrstelle als Applikationsentwickler, die genau diese Kriterien erfüllt. Bieten Sie das an? Wenn ja, zögern Sie nicht, mich zu kontaktieren. Ich freue mich auf ein persönliches Kennenlernen. 
                    </p>
                    <div className="w-full flex flex-row flex-wrap mt-20 mb-20">


                        <div className=" self-start w-[50%] text-left mt-10 mb-5">
                            <h3 className=" text-lg lg:text-3xl md:text-2xl font-bold mb-5">Meine Interessen ❤️</h3>
                            <ul className=" self-start font-semibold text-base lg:text-2xl md:text-xl text-red-600 uppercase">
                                <li>programmieren   💻</li>
                                <li>Pfadfinder      🌲</li>
                                <li>Badminton       🏸</li>
                                <li>Kochen & Essen   🍣</li>
                            </ul>
                        </div>

                        <div className=" self-start w-[50%] text-left mt-10 mb-5">
                            <h3 className=" text-lg lg:text-3xl md:text-2xl font-bold mb-5">Meine Stärken 💪</h3>
                            <ul className=" self-start font-semibold text-base lg:text-2xl md:text-xl text-red-600 uppercase">
                                <li>zielorientiert   🏁</li>
                                <li>höflich             </li>
                                <li>freundlich         🤗</li>
                                <li>Teamplayer         👥</li>
                            </ul>
                        </div>

                        <div className=" w-full bg-white h-[0.1rem] mt-10"></div>

                        <div className=" self-start w-[50%] text-left mt-10 mb-5">
                            <h3 className=" text-lg lg:text-3xl md:text-2xl font-bold mb-5">Sprachen    💬</h3>
                            <ul className=" self-start font-semibold text-sm lg:text-2xl md:text-xl uppercase">
                                <li>Deutsch (Muttersp.) 🇩🇪</li>
                                <li>Englisch (5 J.)     🇬🇧</li>
                                <li>Französisch (2 J.) 🇫🇷</li>
                            </ul>
                        </div>

                        <div className=" self-end w-[50%] text-left mt-10 mb-5">
                            <h3 className=" text-lg lg:text-3xl md:text-2xl font-bold mb-5">Schulbildung 🏫</h3>
                            <ul className=" self-start font-semibold text-sm lg:text-2xl md:text-xl uppercase">
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