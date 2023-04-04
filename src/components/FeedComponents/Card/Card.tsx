import React, { useEffect, useState } from "react";
import CardAvatar from "./CardAvatar";
import Image from "../../../assets/download.png";
import ImagePostare from "../../../assets/cat.jpg";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardInteractions from "./CardInteractions/CardInteractions";
import { DocumentData } from "firebase/firestore";
import CommentsSection from "./CardComments/CommentsSection";
import { useAuth } from "@/hooks/auth";

const Card = ({
    post,
    user,
}: {
    post: DocumentData;
    user: DocumentData | undefined;
}) => {
    const [commentsSection, setCommentsSection] = useState(false);
    return (
        <div className="">
            <div
                className={`w-[500px] bg-slate-900 h-auto overflow-hidden shadow-3xl ${
                    commentsSection ? "rounded-t-2xl" : "rounded-2xl"
                }`}
            >
                <div className=" w-full flex flex-row justify-between items-center gap-6 relative">
                    <CardAvatar image={Image} userId={user?.id} />
                    <CardHeader
                        firstName={user?.firstName}
                        lastName={user?.lastName}
                        date={
                            new Date(post?.date).toLocaleDateString() +
                            " " +
                            new Date(post?.date).toLocaleTimeString()
                        }
                        userId={user?.id}
                    />
                </div>
                <CardBody text={post?.text} imageUrl={ImagePostare} />
                <CardInteractions
                    post={post}
                    setCommentsSection={setCommentsSection}
                />
            </div>
            {commentsSection && <CommentsSection postId={post?.id} />}
        </div>
    );
};

export default Card;
