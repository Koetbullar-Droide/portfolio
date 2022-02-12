import React from "react";
import {OverviewSection, MainImage, TextSection, ImagesPlace, End} from "./../Template/template";

function RaspberryPi () {
    return (
        <div>
            <OverviewSection
            title="Raspberry Pi"
            description="
            Hug-i is an IoT interactive light pillow that addresses the need for remote closeness in light of the pandemic and advances in telecommunication. This pulse-sensing pillow that emits light would help people to connect to their loved ones in an alternative and intimate way.
            "
            year="2022"
            kind="individuelles Projekt"
            findings="
            Java, Javascript
            "
            />
            <MainImage image="https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <TextSection
            title='
            some title
            '
            text='
            Hug-i is an IoT interactive light pillow that addresses the need for remote closeness in light of the pandemic and advances in telecommunication. This pulse-sensing pillow that emits light would help people to connect to their loved ones in an alternative and intimate way.

            '
            />
            <ImagesPlace>
                <div className=" bg-gray-900 h-44 w-64"></div>
                <div className=" bg-gray-900 h-44 w-64"></div>
                <div className=" bg-gray-900 h-44 w-64"></div>
                <div className=" bg-gray-900 h-44 w-64"></div>
                <div className=" bg-gray-900 h-44 w-64"></div>
                <div className=" bg-gray-900 h-44 w-64"></div>
            </ImagesPlace>
            <End/>
        </div>
        
    );
}

export default RaspberryPi;