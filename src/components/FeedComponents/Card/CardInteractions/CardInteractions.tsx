import React from "react";
import CardLikeButton from "./CardLikeButton";
import CardCommentsButton from "./CardCommentsButton";
import CardShareButton from "./CardShareButton";
import { DocumentData } from "firebase/firestore";
import { useAuth } from "@/hooks/auth";
import { useToggleLike } from "@/hooks/posts";

const CardInteractions = ({ post }: { post: DocumentData }) => {
    const { id, likes, uid } = post;
    const { user, isLoading: userLoading } = useAuth();
    const isLiked = likes.includes(user?.uid);

    const config = {
        id,
        isLiked,
        uid: user?.uid,
    };

    const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
    // const { comments, isLoading: commentsLoading } = useComments(id);

    return (
        <div className="flex flex-row text-white w-full h-10 border-t-2 border-gray-600 justify-around mt-2 text-sm">
            <CardLikeButton toggleLike={toggleLike}  isLiked={isLiked} likes={likes}/>

            <CardCommentsButton />

            <CardShareButton />
        </div>
    );
};

export default CardInteractions;
