import React from "react";
import Image from "next/image";
import ProfileImageMsg from "../../../../assets/download.png";
import Link from "next/link";
import { Button } from "@mantine/core";

export const CardComment = () => {
    return (
        <div className="w-full  over overflow-hidden flex flex-row justify-start">
            <Image
                className="avatar img-fluid w-12 h-12 rounded-full mr-2 my-1"
                src={ProfileImageMsg}
                alt="Avatar"
            />
            <div className="flex flex-col">
                <div className="flex flex-row gap-5 justify-between items-center w-full rounded-3xl bg-slate-800 hover:bg-slate-600 pr-4 pl-4 cursor-pointer py-2 ">
                    <div className="flex flex-col w-full">
                        <p className="text-white font-ibm text-2xs ">Niptu Diptulai</p>
                        <p className="text-white font-ibm text-xs">
                            {" "}
                            Am gresit si eu, dar cine nu greseste?{" "}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row ml-1">
                    <Button
                        color="gray"
                        radius="lg"
                        size="xs"
                        compact
                        className="hover:text-gray font-ibm text-xs "
                       
                    >
                        Like
                    </Button>
                    <Button
                        color="gray"
                        radius="lg"
                        size="xs"
                        compact
                        className="hover:text-gray font-ibm text-xs"
                    >
                        Reply
                    </Button>

                    <p className="text-white font-ibm text-xs ml-5 mt-1">
                         4h
                     </p>
                </div>
            </div>
        </div>
    );
};
