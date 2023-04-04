import { usePosts } from "@/hooks/posts";
import { ScrollArea } from "@mantine/core";
import React, {useState } from "react";
import Card from "../Card/Card";
import { useUsers } from "@/hooks/users.js";

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CardsWrapper = ({
    className,
    scrollHeight,
}: {
    className?: string;
    scrollHeight?: number;
}) => {
    const { posts, isLoading: isLoadingPosts } = usePosts();
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
                        : posts?.map((post) => {
                              const user = users?.find(
                                  (user) => user.id === post.uid
                              );

                              return (
                                  <Card
                                      key={post.id}
                                      post={post}
                                      user={user}
                                  />
                              );
                          })}
                </div>
            </ScrollArea>
        </div>
    );
};

export default CardsWrapper;
