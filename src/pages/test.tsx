import MessageWindow from "@/components/FeedComponents/MessageTab/MessageWindow";
import React from "react";
const test = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-red-600">
            <div className="w-[450px] ">
                <MessageWindow/>
            </div>
        </div>
    );
};

export default test;
