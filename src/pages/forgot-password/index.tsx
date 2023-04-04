import ForgotPasswordForm from "@/components/ForgotComponents/ForgotPassword";
import React from "react";

const ForgotPassword = () => {
    return (
        <div className="w-full flex items-center flex-col h-screen justify-center bg-login-pattern bg-cover ">
            <h1 className="text-white pb-6 font-ibm">Reset your password</h1>
            <ForgotPasswordForm />
        </div>
    );
};

export default ForgotPassword;
