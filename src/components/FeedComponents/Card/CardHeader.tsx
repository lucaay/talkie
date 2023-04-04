import React from "react";

const CardHeader = (props) => {
    return (
        <div className=" w-full font-fira text-white flex items-center">
            <span className="name bold font-fira text-xl">{props.name}</span>
            <span className="username text-muted ml-5 text-xs">
                {"@" + props.username}
            </span>
            <span className="dot text-muted mx-2" />
            <span className="date text-muted text-xs">{props.date}</span>
        </div>
    );
};
export default CardHeader;
