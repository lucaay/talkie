import { useAuth, useLogout } from "@/hooks/auth";
import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";
import AuthorImage from "../../../assets/download.png";

interface ProfileCardinterface {
    firstName?: string;
    lastName?: string;
    email?: string;
    birthdate?: any;
    gender?: string;
    userId: string;
}

const ProfileCard = ({
    firstName = "",
    lastName = "",
    email = "Email",
    birthdate = '',
    gender = "Gen",
    userId = "",
}: ProfileCardinterface) => {
    const { user, isLoading: authLoading } = useAuth();

    const { logout, isLoading } = useLogout();
    return (
        <div className="w-[500px] absolute rounded-3xl  bg-slate-900 text-white  flex flex-col items-center justify-center gap-4 top-48 left-32 py-10">
            <Image
                src={AuthorImage}
                alt="Picture of the author"
                className="rounded-full w-32 absolute top-[-75px]"
            />
            <div className="mt-12 flex flex-col items-center justify-center gap-2">
                <h1>
                    {firstName} {lastName}
                </h1>
                <p>{email}</p>
                <p>{new Date(birthdate).toLocaleDateString()}</p>
                <p>{gender}</p>
            </div>
            {user?.uid === userId && (
                <Button onClick={logout} className="bg-blue-700 mt-12">
                    Sign Out
                </Button>
            )}
        </div>
    );
};

export default ProfileCard;
