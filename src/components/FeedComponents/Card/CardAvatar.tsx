import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const CardAvatar = (props: {
    image: StaticImageData;
    userId?: string;
    className?: string;
}) => {
    return (
        <Link
            href={props.userId ? `/profile/${props.userId}` : "#"}
            className={`avatar img-fluid w-10 rounded-full ml-4 my-3 overflow-hidden ${props.className}`}
        >
            <Image className="w-full" src={props.image} alt="Avatar" />
        </Link>
    );
};
export default CardAvatar;
