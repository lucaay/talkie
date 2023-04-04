import React, { useEffect, useState } from "react";
import ProfileImage from "../../../assets/download.png";
import Image from "next/image";
import { Button, Textarea, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import router from "next/router";
import { getUserEmail } from "@/firebase/functions/getCurrentUserEmail";

const PostCard = ({ className }: { className?: string }) => {
    const email = getUserEmail();
    const [firebaseErrors, setFirebaseErrors] = useState<{
        [key: string]: any;
    }>({});
    const [text, setText] = useState<string>("");

    const handleForm = async (event: any) => {
        event.preventDefault();

        const body = JSON.stringify({
            email,
            text,
        });

        console.log(body);

        // // auth info realtime database
        // let url =
        //     "https://talkie-9443e-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
        // fetch(url, {
        //     method: "POST",
        //     body: body,
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // })
        //     .then((res) => {
        //         if (res.ok) {
        //             return res.json();
        //         } else {
        //             return res.json().then((data) => {
        //                 let errorMessage = "Înregistrare eșuată!";
        //                 throw new Error(errorMessage);
        //             });
        //         }
        //     })
        //     .catch((err) => {
        //         alert(err.message);
        //     });

        // const { result, error };

        // if (error) {
        //     setFirebaseErrors(error);
        //     notifications.show({
        //         title: "Error",
        //         color: "red",
        //         message: "Sign up failed",
        //         autoClose: 3000,
        //     });
        //     return console.log(error);
        // }
        // notifications.show({
        //     title: "Success",
        //     color: "green",
        //     message: "Sign up successful",
        //     autoClose: 1000,
        //     onClose: () => router.push("/login"),
        // });
        // // else successful
        // console.log(result);
    };
    return (
        <form
            onSubmit={handleForm}
            className={`w-[500px] bg-slate-900  py-2 px-6 rounded-2xl pb-5 pt-5 ${className}`}
        >
            <div className="flex w-full h-auto justify-center items-center gap-5">
                <Image
                    className="avatar img-fluid w-12 rounded-full my-3"
                    src={ProfileImage}
                    alt="Avatar"
                />
                <Textarea
                    placeholder=" 'Talkie' about something..."
                    variant="filled"
                    radius="xl"
                    required
                    size="lg"
                    autosize
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                    className="w-full"
                />
            </div>
            <div className="flex w-full gap-3 items-center flex-row justify-between pt-2 ">
                <button className="text-white flex flex-row gap-2 items-center hover:text-red-500">
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
                </button>
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
