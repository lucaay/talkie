import { useComments } from "@/hooks/comments";
import { DocumentData } from "firebase/firestore";
import Comment from "./Comment";

export default function CommentList({ post }: { post: DocumentData }) {
    const { id } = post;
    const { comments, isLoading } = useComments(id);

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            {comments?.length === 0 ? (
                <p>There is no comment</p>
            ) : (
                comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))
            )}
        </>
    );
}
