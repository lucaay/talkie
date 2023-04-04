import { usePost, usePosts } from "@/hooks/posts";
import { DocumentData } from "firebase/firestore";
import CommentList from "./CommentList";
import NewComment from "./NewComment";

export default function CommentsSection({
    postId,
}: {
    postId: string;
}): JSX.Element {
    const { post, isLoading } = usePost(postId);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="flex flex-col items-center justify-center w-full bg-slate-900 text-white rounded-b-2xl py-2">
            <NewComment post={post as DocumentData} />
            <CommentList post={post as DocumentData} />
        </div>
    );
}
