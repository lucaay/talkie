import Link from "next/link";
import React from "react";

const CardHeader = ({
    firstName,
    lastName,
    date,
    userId,
}: {
    firstName: string;
    lastName: string;
    date: string;
    userId: string;
}) => {
    return (
        <div className=" w-full font-fira text-white flex items-center">
            <Link
                href={`/profile/${userId}`}
                className="name bold font-fira text-lg hover:text-gray-300"
            >
                {firstName} {lastName}
            </Link>
            <span className="date text-muted text-[12px] mx-2">{date}</span>
        </div>
    );
};
export default CardHeader;
