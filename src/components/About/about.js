import React from "react";
import TopNavigation from "../TopNavigation";

function About () {
    return (
        <div className="p-0">
            <TopNavigation/>
            <div className=" bg-gray-800 w-full text-white text-center flex items-center flex-col p-0">
                
                
                
                <div className=" w-[45%] flex flex-col">
                    <h2 className="font-special text-6xl mt-36 inline-block self-start">It's Jannik here</h2>
                    <div className="profilimage"></div>
                    <p className=" font-normal text-2xl">
                    Wenxin Ju (Wendy) is currently a UIUX designer at Zenja Technology. She is a recent graduate of Pratt Institute's BFA Communications Design program, whose work spans from web, mobile, experience to product design. Combing visual storytelling with a user-centered approach to create meaningful and engaging experiences for people is her special sauce in tackling emerging problems. In her experience working with non-profits and interning at design studios, she thrives to empower people in their communications with the surroundings, and create values for users, businesses, and communities.
                    </p>
                    <div className="w-full flex flex-row flex-wrap">
                        <div className=" self-start w-[50%]">
                        <h3 className=" text-3xl font-special m-5">Meine Interessen</h3>
                        <ul className=" self-start font-semibold">
                            <li>Ski fahren</li>
                            <li>Ski fahren</li>
                            <li>Ski fahren</li>
                            <li>Ski fahren</li>
                        </ul>
                        </div>
                        <div className=" self-end w-[50%]">
                            <h3 className=" text-3xl font-special m-5">Meine Interessen</h3>
                            <ul className=" self-start font-semibold">
                                <li>Ski fahren</li>
                                <li>Ski fahren</li>
                                <li>Ski fahren</li>
                                <li>Ski fahren</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                    

                </div>
            </div>
        </div>
        
    );
}

export default About;