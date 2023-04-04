import { useAuth } from "@/hooks/auth";
import { useAddComment } from "@/hooks/comments";
import { DocumentData } from "firebase/firestore";
import { useForm } from "react-hook-form";
import CardAvatar from "../CardAvatar";
import AvatarImage from "@/assets/download.png";
import { Button, Textarea } from "@mantine/core";

export default function NewComment({ post }: { post: DocumentData }) {
    const { id: postID } = post;
    const { user, isLoading: authLoading } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { addComment, isLoading: commentLoading } = useAddComment({
        postID,
        uid: user?.uid,
    });

    function handleAddComment(data: any) {
        addComment(data.text);
        reset();
    }

    if (authLoading) return <p>Loading...</p>;

    return (
        <div className="flex flex-row w-full items-center justify-start">
            <CardAvatar image={AvatarImage} userId={user?.uid} />
            <div className="w-full ml-2 mr-4">
                <form
                    onSubmit={handleSubmit(handleAddComment)}
                    className="flex flex-row items-center justify-between"
                >
                    <Textarea
                        size="sm"
                        radius="xl"
                        autosize
                        placeholder="Write comment..."
                        autoComplete="off"
                        className="w-full rounded-lg"
                        {...register("text", { required: true })}
                    />
                    <Button
                        type="submit"
                        size="xs"
                        radius="xl"
                        ml="auto"
                        className="bg-blue-500 hover:bg-blue-600 ml-4"
                    >
                        Add Comment
                    </Button>
                </form>
            </div>
        </div>
    );
}
