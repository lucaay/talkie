import ForgotPasswordForm from "@/components/ForgotComponents/ForgotPassword";
import Logo from "@/components/Logo";
import React from "react";

const index = () => {
    return (
        <div className="w-full flex items-center flex-col h-screen justify-center bg-login-pattern bg-cover ">
            <h1 className="text-white pb-6 font-ibm">Reset your password</h1>
            <Logo className="absolute right-0 phone:top-0 laptop:bottom-0 tablet:top-auto laptop:w-48 phone:w-3/6 tablet:bottom-0 tablet:w-60"/>
            <ForgotPasswordForm />
        </div>
    );
};

export default index;
