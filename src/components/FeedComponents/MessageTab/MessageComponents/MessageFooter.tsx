import { Button } from "@mantine/core";
import React from "react";
import { Textarea } from "@mantine/core";

function MessageFooter() {
    return (
        <div className="bg-slate-900 w-full flex flex-row justify-between py-2 px-2 border-t-2 border-slate-600">
            <Textarea
                placeholder="Write a message"
                variant="filled"
                radius="md"
                size="md"
                autosize
                withAsterisk
                className="w-full mx-1"
            />
            <Button
                type="submit"
                radius="lg"
                size="sm"
                color="hover:text-blue-400 ease-in-out"
                className="bg-blue-700 font-ibm w-1/10 mt-2 flex justify-end"
            >
                Send
            </Button>
        </div>
    );
}

export default MessageFooter;
