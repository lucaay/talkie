import CardsWrapper from "@/components/FeedComponents/CardsWrapper/CardsWrapper";
import ProfileCard from "@/components/FeedComponents/ProfileCard/ProfileCard";
import { useAuth } from "@/hooks/auth";
import { useUsers } from "@/hooks/users";
import { useRouter } from "next/router";
import React from "react";

const Profile = () => {
    const { users, isLoading: isLoadingUsers } = useUsers();

    const router = useRouter();
    const { userId } = router.query;

    const user = users?.find((user) => user.id === userId);

    return (
        <div className="bg-login-pattern bg-cover w-full h-screen">
            <ProfileCard
                firstName={user?.firstName}
                lastName={user?.lastName}
                email={user?.email}
                birthdate={user?.birthdate}
                gender={user?.gender}
                userId={user?.id}
            />
            <CardsWrapper
                className="absolute right-28 top-[37.5%]"
                scrollHeight={400}
            />
        </div>
    );
};

export default Profile;
