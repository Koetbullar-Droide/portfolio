import React from "react";
import {OverviewSection, MainImage, TextSection, Image, ImagesPlace, End} from "./../Template/template";
 
function Unity () {
    return (
        <div>
            <OverviewSection
            title="Unity Engine Course"
            description="
            Ich habe an einem Kurs über Unity zur Game Entwicklung teilgenommen. Dort konnte ich meine ersten Schritte beginnen ein kleines Game zu machen.
            "
            year="2020"
            kind="Kurs"
            findings="
            Unity, GameDev
            "
            />
            <MainImage image="https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <TextSection
            title='
            Der kleine Drache
            '
            text='
            In diesem Kurs haben ich  über eine Woche lang gelernt wie man ein einfaches 2D-Game macht. Das Game bestand grundsätzlich aus einem Drache der durch eine Höhle fliegt mit vielen Spitzen. Ich konnte so die Grundsätze wie ein Game aufgebaut ist besser verstehen. Des Weiteren konnte ich die Programmiersprache C# anreissen. Dieser Kurs wurde von Futurkids in Zürich durchgeführt.

            '
            />
            <ImagesPlace>
                <Image url="
                https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1550106868008x482129765423695360%2FFuturekids.io-Unity-OrigamiDragon-1.png?w=1536&h=1098&auto=compress&dpr=1&fit=max 
                "/>
                <Image url="
                https://static.techspot.com/images2/news/bigimage/2019/03/2019-03-18-image-24.jpg
                "/>
            </ImagesPlace>
            <End
            nextproject="/WRO"
            lastproject="/Pc"
            />
        </div>
        
    );
}

export default Unity;