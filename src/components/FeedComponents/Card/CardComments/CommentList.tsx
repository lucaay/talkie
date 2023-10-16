import { useComments } from "@/hooks/comments";
import { DocumentData } from "firebase/firestore";
import Comment from "./Comment";

export default function CommentList({ post }: { post: DocumentData }) {
    const { id } = post;
    const { comments, isLoading } = useComments(id);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 mt-6">
            {!comments ? (
                <p>There is no comment</p>
            ) : (
                comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))
            )}
        </div>
    );
}
