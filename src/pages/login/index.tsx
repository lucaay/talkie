import LoginForm from "@/components/LoginComponents/LoginForm";
import Logo from "@/components/Logo";
import React from "react";

const index = () => {
    return (
        <div className="w-full flex items-center flex-col h-screen justify-center bg-login-pattern bg-cover ">
            <Logo />
            <LoginForm />
        </div>
    );
};

export default index;
