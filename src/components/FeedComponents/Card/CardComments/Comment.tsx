import React from "react";
import Image from "next/image";
import ProfileImageMsg from "../../../../assets/download.png";
import Link from "next/link";
import { Button } from "@mantine/core";
import CardAvatar from "../CardAvatar";
import { DocumentData } from "firebase/firestore";
import { useUsers } from "@/hooks/users";

const Comment = ({ comment }: { comment: DocumentData }) => {
    const { users, isLoading: isLoadingUsers } = useUsers();



    const user = users?.find((user) => user.id === comment.uid);
    const { id, likes, uid } = comment;

    return (
        <div className="flex flex-row w-full items-center justify-start">
            <CardAvatar image={ProfileImageMsg} />
            <div className="flex flex-col w-full ml-2 mr-4">
                <div className="flex flex-row gap-5 justify-between items-center w-full rounded-3xl bg-slate-800  pr-4 pl-4 py-2 ">
                    <div className="flex flex-col w-full">
                        <Link
                            href="#"
                            className="text-white font-ibm text-[14px] "
                        >
                            {user?.firstName} {user?.lastName}
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
                        className="hover:text-gray font-ibm text-xs "
                    >
                        Like
                    </Button>
                    <Button
                        color="gray"
                        radius="lg"
                        size="xs"
                        compact
                        className="hover:text-gray font-ibm text-xs"
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
