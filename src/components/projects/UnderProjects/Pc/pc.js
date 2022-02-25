import React from "react";
import {OverviewSection, MainImage, TextSection, Image, ImagesPlace, End} from "./../Template/template";
 
function Pc () {
    return (
        <div>
            <OverviewSection
            title="My own Gaming Pc"
            description="
            Ich habe meinen eigenen Pc von Grund auf gebaut. Die Hardware ausgesucht, zusammen gebaut und Software installiert. Meine ersten Schritte in richtung Hardware.
            "
            year="2018"
            kind="individuelles Projekt"
            findings="
            Pc, Hardware
            "
            />
            <MainImage image="https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <TextSection
            title='
            My own Pc
            '
            text='
            Das Ziel war einen eigenen Pc zu bauen der in der Lage ist Games zu laden und nicht zu hohe Kosten verursacht. Zum Glück kannte ich jemandem im Bekannten Kreis der noch gute gebrauchte Hardware anbieten konnte. Dadurch musste ich weniger Teile dazu kaufen. Bis ich alle passenden Teile gekriegt habe, die aufeinander abgestimmt waren, verging eine Weile. Doch eines Tages kam der aufregende Tag des Zusammenbaus. Ich baute alle Teile zusammen und steckte meinen bootfähigen Stick rein um Windows zu installieren. Die Installation verlief ganz gut, aber merkwürdigerweise stürzte er manchmal nach dem Start wieder ab. Nach ein paar Recherchen stellte sich heraus das die Festplatte nicht ordnungsgemäß funktionierte. Das Problem ließ sich aber schnell beheben.


            '
            />
            <ImagesPlace>
                <Image url="
                https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80
                "/>
            </ImagesPlace>
            <End
            nextproject="/Unity"
            lastproject="/RaspberryPi"
            />
        </div>
        
    );
}

export default Pc;