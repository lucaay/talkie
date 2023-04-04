import React from "react";
import Image from "next/image";
import ProfileImage from "../../../assets/download.png";
import { Textarea } from "@mantine/core";

const FriendsCard = () => {
    return (
        <div className="flex w-full h-auto justify-center items-center gap-5">
            <Image
                className="avatar img-fluid w-12 rounded-full my-3"
                src={ProfileImage}
                alt="Avatar"
            />
            <Textarea
                placeholder=" 'Talkie' about something..."
                variant="filled"
                radius="xl"
                required
                size="lg"
                autosize
                className="w-full"
            />
        </div>
    );
};

export default FriendsCard;
