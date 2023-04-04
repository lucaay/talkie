import { ScrollArea } from "@mantine/core";
import React from "react";
import FriendsCard from "./FriendsCard";

const x = [
    { id: 0, firstName: "John", lastName: "Doe" },
    { id: 1, firstName: "Iulian", lastName: "Olaru" },
    { id: 2, firstName: "Georgian", lastName: "Florian" },
    { id: 3, firstName: "Aurel", lastName: "Vlaicu" },
    { id: 4, firstName: "Ion", lastName: "Creanga" },
    { id: 5, firstName: "Mihai", lastName: "Eminescu" },
    { id: 6, firstName: "George", lastName: "Cosbuc" },
    { id: 7, firstName: "Mihai", lastName: "Viteazul" },
    { id: 8, firstName: "Vasile", lastName: "Alecsandri" },
    { id: 9, firstName: "Mihai", lastName: "Viteazul" },
];
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
            <ScrollArea h={scrollHeight || 900} className="w-full">
                <div className="flex flex-col items-center justify-center gap-4 w-full ">
                    {x.map((item) => {
                        return (
                            <FriendsCard
                                firstName={item.firstName}
                                lastName={item.lastName}
                                key={item.id}
                            />
                        );
                    })}
                </div>
            </ScrollArea>
        </div>
    );
};

export default FrientsWrapper;
