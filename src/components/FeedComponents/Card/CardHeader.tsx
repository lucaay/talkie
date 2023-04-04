import Link from "next/link";
import React from "react";

const CardHeader = (props) => {
    return (
        <div className=" w-full font-fira text-white flex items-center">
            <Link href='#' className="name bold font-fira text-xl hover:text-gray-300">{props.firstName} {props.lastName}</Link>
            <span className="dot text-muted mx-2" />
            <span className="date text-muted text-xs">{props.date}</span>
        </div>
    );
};
export default CardHeader;
