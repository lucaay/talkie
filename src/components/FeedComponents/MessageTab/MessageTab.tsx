import React, { useEffect, useState } from "react";
import ProfileImageMessage from "../../../assets/download.png";
import Image from "next/image";
import { Button, ScrollArea } from "@mantine/core";

const MessageTab = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div className="w-full h-auto bg-slate-900 rounded-t-3xl flex flex-col justify-around overflow-hidden ">
            {isOpen && (
                <ScrollArea className="border-b-2">
                    <div className="w-full h-96 p-4 flex flex-col items-start justify-start">
                        <div className="flex flex-row gap-5 justify-between items-center w-full rounded-lg bg-slate-800 hover:bg-slate-600 pr-3 pl-3">
                            <Image
                                className="avatar img-fluid w-12 rounded-full my-3"
                                src={ProfileImageMessage}
                                alt="Avatar"
                            />
                            <div className="flex flex-col w-full">
                                <p className="text-white">Niptu Diptulai</p>
                                <p className="text-white"> mesaj</p>
                            </div>
                            <p className="text-white text-xs whitespace-nowrap">
                                4 Aprilie
                            </p>
                        </div>
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
                    } ease-in-out duration-1000`}
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
