import React, { SetStateAction } from "react";
import CardLikeButton from "./CardLikeButton";
import CardCommentsButton from "./CardCommentsButton";
import CardShareButton from "./CardShareButton";
import { DocumentData } from "firebase/firestore";
import { useAuth } from "@/hooks/auth";
import { useToggleLike } from "@/hooks/posts";
import { useComments } from "@/hooks/comments";

const CardInteractions = ({
    post,
    setCommentsSection,
}: {
    post: DocumentData;
    setCommentsSection: React.Dispatch<SetStateAction<boolean>>;
}) => {
    const { id, likes, uid } = post;
    const { user, isLoading: userLoading } = useAuth();
    const isLiked = likes.includes(user?.uid);

    const config = {
        id,
        isLiked,
        uid: user?.uid,
    };

    const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
    const { comments, isLoading: commentsLoading } = useComments(id);

    const toggleComments = () => {
        setCommentsSection((prev: boolean) => !prev);
    };

    return (
        <div className="flex flex-row text-white w-full h-10 border-t-2 border-gray-600 justify-around mt-2 text-sm">
            <CardLikeButton
                toggleLike={toggleLike}
                isLiked={isLiked}
                likes={likes}
            />

            <CardCommentsButton
                toggleComments={toggleComments}
                comments={comments}
            />

            <CardShareButton />
        </div>
    );
};

export default CardInteractions;
