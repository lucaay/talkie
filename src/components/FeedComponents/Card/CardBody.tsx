import Image from "next/image";
import React from "react";

const CardBody = (props) => {
    return (
        <div className="w-full">
            <Image src={props.imageUrl} alt="" className="w-full mx-auto " />
            <p className="text-white py-2 ml-4">{props.text}</p>
        </div>
    );
};

export default CardBody;
