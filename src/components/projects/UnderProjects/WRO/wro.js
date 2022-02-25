import React from "react";
import {OverviewSection, MainImage, TextSection, Image, ImagesPlace, End} from "./../Template/template";
 
function WRO () {
    return (
        <div>
            <OverviewSection
            title="World Robot Olympiad"
            description="
            An der World Robot Olympiad(WRO) löst man mit Lego Roboten von Minestorms verschiedene Aufgaben um Punkte zu kriegen. Ich habe mit einem Team vom Tüftelatelier daran teilgenommen.
            "
            year="2019"
            kind="Team Projekt"
            findings="
            Robotik, Lego Minestorms
            "
            />
            <MainImage image="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <TextSection
            title='
            Beschreibung
            '
            text='
            Jedes Jahr gibt es bei der WRO ein Thema und dazu passende Aufgaben. Im Jahr 2019 musste man alte Lampen durch neue ersetzen mit Hilfe eines Lego Mindstorms. Die genauere Aufgabenstellung können Sie beim Link unter dem Text nachlesen. Im Tüftelatelier konstruierten wir den Roboter und haben mittels der eigenen Programmiersprache des Roboters ihn programmiert. Der Roboter musste perfekt an die Aufgaben angepasst werden. Zum Beispiel brauchte er einen geeigneten Arm um die Lampen zu greifen und auch geeignete Sensoren um sich zu orientieren. Dies musste man auch alles noch vernetzen und abstimmen.


            '
            ><a href="https://worldrobotolympiad.ch/junior-2019/" className=" text-blue-500 underline">World Robot Olympiad Aufgabenstellung 2019</a></TextSection>
            
            <ImagesPlace>
                <Image url="
                https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80
                "/>
            </ImagesPlace>
            <End
            nextproject="/RaspberryPi"
            lastproject="/Unity"
            />
        </div>
        
    );
}

export default WRO;