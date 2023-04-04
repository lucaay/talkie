import CardsWrapper from "@/components/FeedComponents/CardsWrapper/CardsWrapper";
import FrientsWrapper from "@/components/FeedComponents/Friends/FrientsWrapper";
import PostCard from "@/components/FeedComponents/PostCard/PostCard";
import { Button } from "@mantine/core";
import React from "react";
import router from "next/router";
import MessageTab from "@/components/FeedComponents/MessageTab/MessageTab";
import { useAuth, useLogout } from "@/hooks/auth";
import { usePosts } from "@/hooks/posts";

const Feed = () => {
    const { logout, isLoading } = useLogout();
    const { user, isLoading: authLoading } = useAuth();
    const { posts, isLoading: isLoadingPosts } = usePosts();
    return (
        <div className="bg-login-pattern bg-cover w-auto h-screen flex flex-row items-start justify-start gap-2 pt-4 pl-4">
            <div className="flex flex-col items-center justify-center gap-4 h-full">
                <FrientsWrapper className="h-full" />
                <div className="w-full bg-slate-900  rounded-2xl flex flex-row items-center justify-around mb-4 py-4 px-4 gap-6">
                    <Button
                        onClick={() => router.push(`/profile/${user?.uid}`)}
                        className="bg-blue-700 w-full"
                    >
                        My profile
                    </Button>
                    <Button onClick={logout} className="bg-blue-700 w-full">
                        Sign Out
                    </Button>
                    x
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 h-full">
                <PostCard className="" />
                {posts?.length === 0 ? (
                    <p className="text-center text-xl">
                        No posts yet... Feeling a little lonely here.
                    </p>
                ) : (
                    <CardsWrapper
                        posts={posts}
                        isLoadingPosts={isLoadingPosts}
                        className=""
                    />
                )}
            </div>
            <MessageTab className="absolute right-10 bottom-0 w-[25%]" />
        </div>
    );
};

export default Feed;
