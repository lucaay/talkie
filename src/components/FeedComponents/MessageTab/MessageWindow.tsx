import React from "react";
import MessageHeader from "./MessageComponents/MessageHeader";
import MessageContent from "./MessageComponents/MessageContent";
import MessageFooter from "./MessageComponents/MessageFooter";

const MessageWindow = ({ closeMessage }: { closeMessage: () => void }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center rounded-xl overflow-hidden">
            <MessageHeader closeMessage={closeMessage} />
            <MessageContent />
            <MessageFooter />
        </div>
    );
};

export default MessageWindow;
