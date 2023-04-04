import CardsWrapper from "@/components/FeedComponents/CardsWrapper/CardsWrapper";
import ProfileCard from "@/components/FeedComponents/ProfileCard/ProfileCard";
import React from "react";

const Profile = () => {
    return (
        <div className="bg-login-pattern bg-cover w-full h-screen">
            <ProfileCard
                firstName="Georgian"
                lastName="Florian"
                email="gicu@test.com"
                birthdate="10 ianuarie"
                gender="male"
            />
            <CardsWrapper className="absolute right-28 top-[37.5%]" scrollHeight={400} />
        </div>
    );
};

export default Profile;
