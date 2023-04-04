import React from "react";
import Image from "next/image";
import ProfileImageMsg from "../../../../assets/download.png";
import Link from "next/link";
import { Button } from "@mantine/core";
import CardAvatar from "../CardAvatar";
import { DocumentData } from "firebase/firestore";
import { useUsers } from "@/hooks/users";
import { useAuth } from "@/hooks/auth";
import { useToggleCommentLike } from "@/hooks/posts";

const Comment = ({ comment }: { comment: DocumentData }) => {
    const { users, isLoading: isLoadingUsers } = useUsers();
    const { user: loggedUser, isLoading: userLoading } = useAuth();

    const commentUser = users?.find((user) => user.id === comment.uid);

    const { id, likes, uid } = comment;
    const isLiked = likes.includes(loggedUser?.uid);

    const config = {
        id,
        isLiked,
        uid: loggedUser?.uid,
    };

    const { toggleCommentLike, isLoading: commentLikeLoading } =
        useToggleCommentLike(config);
    return (
        <div className="flex flex-row w-full items-center justify-start">
            <CardAvatar image={ProfileImageMsg} userId={commentUser?.id} />
            <div className="flex flex-col w-full ml-2 mr-4">
                <div className="flex flex-row gap-5 justify-between items-center w-full rounded-3xl bg-slate-800  pr-4 pl-4 py-2 ">
                    <div className="flex flex-col w-full">
                        <Link
                            href="#"
                            className="text-white font-ibm text-[14px] "
                        >
                            {commentUser?.firstName} {commentUser?.lastName}
                        </Link>
                        <p className="text-white font-ibm text-[12px]">
                            {comment.text}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row ml-1">
                    <Button
                        color="gray"
                        radius="lg"
                        size="xs"
                        compact
                        className={`hover:text-red-400 font-ibm text-xs  ${
                            isLiked ? "text-red-400" : "text-white"
                        }`}
                        onClick={() => toggleCommentLike()}
                    >
                        {likes.length} Likes
                    </Button>
                    <Button
                        color="gray"
                        radius="lg"
                        size="xs"
                        compact
                        className="hover:text-red-400 font-ibm text-xs"
                    >
                        Reply
                    </Button>

                    <p className="text-white font-ibm text-xs ml-5 mt-1">4h</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;
