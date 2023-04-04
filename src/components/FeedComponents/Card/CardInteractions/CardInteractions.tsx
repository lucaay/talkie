import React from "react";
import CardLikeButton from "./CardLikeButton";
import CardCommentsButton from "./CardCommentsButton";
import CardShareButton from "./CardShareButton";

const CardInteractions = () => {
    return (
        <div className="flex flex-row text-white w-full h-10 border-t-2 border-gray-600 justify-around mt-2 text-sm">
            <CardLikeButton />

            <CardCommentsButton />

            <CardShareButton />
        </div>
    );
};

export default CardInteractions;
