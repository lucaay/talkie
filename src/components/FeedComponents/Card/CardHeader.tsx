import Link from "next/link";
import React from "react";

const CardHeader = (props) => {
    return (
        <div className=" w-full font-fira text-white flex items-center">
            <Link href={`/profile/${props.userId}`} className="name bold font-fira text-lg hover:text-gray-300">{props.firstName} {props.lastName}</Link>
            <span className="date text-muted text-[12px] mx-2">{props.date}</span>
        </div>
    );
};
export default CardHeader;
