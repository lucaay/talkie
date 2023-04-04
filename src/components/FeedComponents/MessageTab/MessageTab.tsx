import React, { useEffect, useState } from "react";
import { Button, ScrollArea } from "@mantine/core";
import MessageCard from "./MessageCard";
import Image from "next/image";
import ProfileImageMessage from "../../../assets/download.png";

const MessageTab = ({ className }: { className?: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div
            className={`w-full h-auto bg-slate-900 rounded-t-3xl flex flex-col justify-around overflow-hidden ${className}`}
        >
            {isOpen && (
                <ScrollArea className="border-b-2">
                    <div className="w-full h-[350px] p-4 flex flex-col items-start justify-start">
                        <MessageCard></MessageCard>
                    </div>
                </ScrollArea>
            )}
            <div
                className="flex flex-row justify-center items-center gap-16 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    className="avatar img-fluid w-12 rounded-full my-3"
                    src={ProfileImageMessage}
                    alt="Avatar"
                />
                <p className="text-white font-ibm">Messaging</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 text-white ${
                        isOpen && "rotate-180"
                    } ease-in-out duration-300`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default MessageTab;
