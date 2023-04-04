import React from "react";
import MessageHeader from "./MessageComponents/MessageHeader";
import MessageContent from "./MessageComponents/MessageContent";
import MessageFooter from "./MessageComponents/MessageFooter";

const MessageWindow = () => {
    return (
       <div className="w-full flex flex-col justify-center items-center rounded-xl overflow-hidden">
        <MessageHeader/>
        <MessageContent/>
        <MessageFooter/>
       </div>

    );
};

export default MessageWindow;
