import LoginForm from "@/components/LoginComponents/LoginForm";
import React from "react";

const Login = () => {
    return (
        <div className="w-full flex items-center flex-col h-screen justify-center bg-login-pattern bg-[left_top] bg-no-repeat bg-[length:100%_auto] pt-32">
            <LoginForm />
        </div>
    );
};

export default Login;
