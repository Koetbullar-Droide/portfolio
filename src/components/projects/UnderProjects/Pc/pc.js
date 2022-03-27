import React from "react";
import {OverviewSection, MainImage, TextSection, Image, ImagesPlace, End} from "./../Template/template";
 
function Pc () {
    return (
        <div>
            <OverviewSection
            title="My own Gaming Pc"
            description="
            Ich habe meinen eigenen Pc von Grund auf gebaut. Die Hardware ausgesucht, zusammen gebaut und Software installiert. Meine ersten Schritte in Richtung Hardware.
            "
            year="2018"
            kind="individuelles Projekt"
            findings="
            Pc, Hardware
            "
            />
            <MainImage image="https://images.unsplash.com/photo-1552585155-f5c1efa32555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>
            <TextSection
            title='
            My own Pc
            '
            text='
            Zuerst musste ich die Hardware aussuchen, dabei war das Schwierigste, dass alle Teile miteinander funktionieren. Ich konnte viele passende gebrauchte Teile auftreiben. Danch habe ich den PC zusammen gebaut und das Betriebsystem drauf installiert. Bedauerlicherweise war die Festplatte defekt und ich musste sie ersetzten. Bis ich wusste, dass es an der Festplatte lag, verging eine Weile.


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