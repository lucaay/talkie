import { ScrollArea } from "@mantine/core";
import React from "react";
import Card from "../Card/Card";

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CardsWrapper = ({ className, scrollHeight }: { className?: string, scrollHeight?: number }) => {
    return (
        <div
            className={`flex flex-col items-center justify-center rounded-2xl  overflow-hidden gap-10 ${className}`}
        >
            <ScrollArea h={scrollHeight || 900}>
                <div className="flex flex-col items-center justify-center gap-10 ">
                    {x.map((item) => {
                        return <Card key={item} />;
                    })}
                </div>
            </ScrollArea>
        </div>
    );
};

export default CardsWrapper;
