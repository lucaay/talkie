import React from "react";
import Image from "next/image";
import ProfileImage from "../../../assets/download.png";
import LogoTalkie from "@/components/LogoTalkie";
import { Textarea } from "@mantine/core";
import Link from "next/link";

const FriendsCard = ({
    firstName,
    lastName,
}: {
    firstName: string;
    lastName: string;
}) => {
    return (
        <div className="flex w-full h-full justify-start items-center gap-5 hover:bg-slate-800 py-4 px-4 rounded-xl">
            <Image
                className="avatar img-fluid w-12 rounded-full cursor-pointer hover:opacity-50"
                src={ProfileImage}
                alt="Avatar"
            />
            <Link href="#" className="w-full cursor-pointer hover:text-red-500">
                {firstName} {lastName}
            </Link>
            <LogoTalkie className="w-1/4 cursor-pointer hover:opacity-50" />
        </div>
    );
};

export default FriendsCard;
