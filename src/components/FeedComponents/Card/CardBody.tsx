import Image, { StaticImageData } from "next/image";
import React from "react";

const CardBody = ({
    imageUrl,
    text,
}: {
    imageUrl: StaticImageData;
    text: string;
}) => {
    return (
        <div className="w-full">
            <Image src={imageUrl} alt="" className="w-full mx-auto " />
            <p className="text-white text-sm py-2 ml-4">{text}</p>
        </div>
    );
};

export default CardBody;
