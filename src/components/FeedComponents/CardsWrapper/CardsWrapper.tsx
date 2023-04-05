import { usePosts } from "@/hooks/posts";
import { ScrollArea } from "@mantine/core";
import React, { useState } from "react";
import Card from "../Card/Card";
import { useUsers } from "@/hooks/users.js";

const CardsWrapper = ({
    className,
    scrollHeight,
    posts,
    isLoadingPosts,
}: {
    className?: string;
    scrollHeight?: number;
    posts: any;
    isLoadingPosts: boolean;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { users, isLoading: isLoadingUsers } = useUsers();

    return (
        <div
            className={`flex flex-col items-center justify-center rounded-2xl  overflow-hidden gap-10 ${className}`}
        >
            <ScrollArea h={scrollHeight || 900}>
                <div className="flex flex-col items-center justify-center gap-6 ">
                    {isLoadingPosts || isLoading
                        ? "Loading posts..."
                        : posts?.map((post: any) => {
                              const user = users?.find(
                                  (user) => user.id === post.uid
                              );

                              return (
                                  <Card key={post.id} post={post} user={user} />
                              );
                          })}
                </div>
            </ScrollArea>
        </div>
    );
};

export default CardsWrapper;
