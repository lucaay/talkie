import CardsWrapper from "@/components/FeedComponents/CardsWrapper/CardsWrapper";
import FrientsWrapper from "@/components/FeedComponents/Friends/FrientsWrapper";
import PostCard from "@/components/FeedComponents/PostCard/PostCard";
import { Button } from "@mantine/core";
import React from "react";
import logOut from "@/firebase/auth/logOut";
import router from "next/router";

const feed = () => {
    return (
        <div className="bg-login-pattern bg-cover w-auto h-screen flex flex-row items-start justify-start gap-2 pt-4 pl-4">
            <div className="flex flex-col items-center justify-center gap-4 h-full">
                <FrientsWrapper className="h-full" />
                <div className="w-full bg-slate-900  rounded-2xl flex flex-row items-center justify-around mb-4 py-4 px-4 gap-6">
                    <Button
                        onClick={() => router.push("/profile")}
                        className="bg-blue-700 w-full"
                    >
                        My profile
                    </Button>
                    <Button onClick={logOut} className="bg-blue-700 w-full">
                        Sign Out
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
                <PostCard className="" />
                <CardsWrapper className="" scrollHeight={525} />
            </div>
        </div>
    );
};

export default feed;
