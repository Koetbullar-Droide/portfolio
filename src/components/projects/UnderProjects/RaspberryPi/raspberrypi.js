import React from "react";
import {OverviewSection, MainImage, TextSection, Image, ImagesPlace, End} from "./../Template/template";
 
function RaspberryPi () {
    return (
        <div>
            <OverviewSection
            title="Raspberry Pi"
            description="
            Raspberry Pi ist ein Einplatinen Computer mit dem man vieles vollbringen kann. Ich habe es vor allem für den ersten Schritt gebraucht in Richtung meiner eigenen Cloud. Dabei konnte ich die Serververwaltung näher kennen lernen.
            "
            year="2019"
            kind="individuelles Projekt"
            findings="
            Server, Network
            "
            />
            <MainImage image="https://images.unsplash.com/photo-1587919057555-d728ff5beac3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"/>
            <TextSection
            title='
            My own Nextcloud
            '
            text='
            Das Ziel war eine kleine eigene Cloud zu haben auf der man seine eigenen Daten ablegen kann. Dazu habe ich einen Raspberry Pi 3 verwendet, der gerade genügend Leistung bietet. Hinzu kommen noch eine SD-Karte und die Software. Ich habe mich für Nextcloud als Software entschieden, weil es eine gute Benutzererfahrung bietet und Open Source ist. Zuerst habe ich eine ISO für den Raspberry Pi heruntergeladen, die Nextcloud schon drauf hat. Danach auf die SD-Karte geflasht und in den Raspberry Pi gesteckt. Dann habe ich ihn über LAN mit dem Router verbunden und ins Router-Interface eingeloggt um die lokale IP-Adresse des Raspberry Pis herauszufinden und zu reservieren. Mittels dem Browser griff ich auf den Raspberry Pi zu um die Konfiguration abzuschließen. Ich habe auch noch eine externe Festplatte angeschlossen um den Speicher zu erhöhen. Die konnte ich auch in der Konfiguration formatieren und als Haupt Speichermedium auswählen. Zu meinem entsetzen ist der Raspberry Pi 3 nicht gerade der Schnellste, aber vielleicht lag es auch an der ziemlich alten Festplatte.


            '
            />
            <ImagesPlace>
                <Image url="
                https://images.unsplash.com/photo-1553406830-f6e44ac97624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80
                "/>
                <Image url="
                https://nachbelichtet.com/wp-content/uploads/2020/08/nextcloud-1920x1080.jpg
                "/>
            </ImagesPlace>
            <End
            nextproject="/Pc"
            lastproject="/WRO"
            />
        </div>
        
    );
}

export default RaspberryPi;