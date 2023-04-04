import React, { useState } from "react";
import CardAvatar from "./CardAvatar";
import Image from "../../../assets/download.png";
import ImagePostare from "../../../assets/cat.jpg";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardInteractions from "./CardInteractions/CardInteractions";

export interface CardInterface {
    name: string;
}

const Card = () => {
    return (
        <div className="w-[500px] bg-slate-900 h-auto rounded-2xl overflow-hidden shadow-3xl">
            <div className=" w-full flex flex-row justify-between items-center gap-6 relative">
                <CardAvatar image={Image} />
                <CardHeader
                    firstName="Nicu"
                    lastName="George"
                    date=" 10 Aprilie"
                />
            </div>
            <CardBody
                text="Lorem ipsum dolor amet tbh sriracha wayfarers, hoodie meditation chambray cupidatat kickstarter beard."
                imageUrl={ImagePostare}
            />
            <CardInteractions />
        </div>
    );
};

export default Card;
