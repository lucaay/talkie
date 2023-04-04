import Image, { StaticImageData } from "next/image";
import React from "react";

const CardAvatar = (props: { image: StaticImageData }) => {
    return (
        <Image
            className="avatar img-fluid w-10 rounded-full ml-4 my-3"
            src={props.image}
            alt="Avatar"
        />
    );
};
export default CardAvatar;
