import React, { useEffect, useState } from "react";
import ProfileImage from "../../../assets/download.png";
import Image from "next/image";
import { Button, FileInput, Textarea, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import router from "next/router";
import { getUserEmail } from "@/firebase/functions/getCurrentUserEmail";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useAuth } from "../../../hooks/auth";
import { useAddPost } from "../../../hooks/posts";
import { useForm } from "react-hook-form";
import CardAvatar from "../Card/CardAvatar";

const PostCard = ({ className }: { className?: string }) => {
    const { register, handleSubmit, reset } = useForm();
    const { addPost, isLoading: addingPost } = useAddPost();
    const { user, isLoading: authLoading } = useAuth();

    function handleAddPost(data: any) {
        addPost({
            uid: user?.uid,
            text: data.text,
            date: new Date(),
        });
        reset();
    }
    return (
        <form
            onSubmit={handleSubmit(handleAddPost)}
            className={`w-[500px] bg-slate-900  py-2 px-6 rounded-2xl pb-5 pt-5 ${className}`}
        >
            <div className="flex w-full h-auto justify-center items-center gap-5">
                <CardAvatar image={ProfileImage} userId={user?.uid} className="w-[75px]" />
                <Textarea
                    placeholder=" 'Talkie' about something..."
                    variant="filled"
                    radius="xl"
                    required
                    size="lg"
                    autosize
                    className="w-full"
                    {...register("text", { required: true })}
                />
            </div>
            <div className="flex w-full gap-3 items-center flex-row justify-between pt-2 ">
                <div className="text-white flex flex-row gap-2 items-center hover:text-red-500 cursor-pointer w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                    </svg>
                    Foto
                </div>
                <Button
                    type="submit"
                    size="xs"
                    radius="lg"
                    uppercase
                    color="hover:text-blue-400 ease-in-out"
                    className="bg-blue-600  font-ibm w-1/4 text-sm"
                >
                    Post
                </Button>
            </div>
        </form>
    );
};

export default PostCard;
