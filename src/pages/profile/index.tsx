import ProfileCard from "@/components/FeedComponents/ProfileCard/ProfileCard";
import React from "react";

const index = () => {
    return (
        <div className="bg-login-pattern bg-cover w-full h-screen">
            <ProfileCard
                firstName="Georgian"
                lastName="Florian"
                email="gicu@test.com"
                birthdate="10 ianuarie"
                gender="male"
            />
        </div>
    );
};

export default index;
