import React from "react";
import Image from "next/image";
import ProfileImageMessage from "../../../assets/download.png";

const MessageCard = () => {
    return (
        <div className="flex flex-row gap-5 justify-between items-center w-full rounded-lg bg-slate-800 hover:bg-slate-600 pr-3 pl-3 cursor-pointer">
            <Image
                className="avatar img-fluid w-12 rounded-full my-3"
                src={ProfileImageMessage}
                alt="Avatar"
            />
            <div className="flex flex-col w-full">
                <p className="text-white">Niptu Diptulai</p>
                <p className="text-white opacity-50"> mesaj</p>
            </div>
            <p className="text-white text-xs whitespace-nowrap">4 Aprilie</p>
        </div>
    );
};

export default MessageCard;
