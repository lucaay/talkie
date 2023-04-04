import React, { useEffect, useState } from "react";
import CardAvatar from "./CardAvatar";
import Image from "../../../assets/download.png";
import ImagePostare from "../../../assets/cat.jpg";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardInteractions from "./CardInteractions/CardInteractions";
import { DocumentData } from "firebase/firestore";

const Card = ({
    post,
    user,
}: {
    post: DocumentData | undefined;
    user: DocumentData | undefined;
}) => {
    console.log(post);

    return (
        <div className="w-[500px] bg-slate-900 h-auto rounded-2xl overflow-hidden shadow-3xl">
            <div className=" w-full flex flex-row justify-between items-center gap-6 relative">
                <CardAvatar image={Image} />
                <CardHeader
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    date={
                        new Date(post?.date).toLocaleDateString() +
                        " " +
                        new Date(post?.date).toLocaleTimeString()
                    }
                    userId={user?.id}
                />
            </div>
            <CardBody
                text={post?.text}
                imageUrl={ImagePostare}
            />
            <CardInteractions />
        </div>
    );
};

export default Card;
