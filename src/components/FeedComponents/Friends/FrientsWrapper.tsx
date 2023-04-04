import { ScrollArea } from "@mantine/core";
import React from "react";
import FriendsCard from "./FriendsCard";

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const FrientsWrapper = ({
    className,
    scrollHeight,
}: {
    className?: string;
    scrollHeight?: number;
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-start text-white rounded-2xl bg-slate-900  overflow-hidden gap-10 ${className} w-[350px]`}
        >
            <h1>Friends</h1>
            <ScrollArea h={scrollHeight || 900}>
                <div className="flex flex-col items-center justify-center gap-4 ">
                    {x.map((item) => {
                        return <FriendsCard key={item} />;
                    })}
                </div>
            </ScrollArea>
        </div>
    );
};

export default FrientsWrapper;
