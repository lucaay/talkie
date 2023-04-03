import React from "react";
import Logo from "../../components/Logo";
import RegisterForm from "@/components/RegisterComponents/RegisterForm";
const index = () => {
    return (
        <div className="bg-login-pattern bg-cover w-full h-screen">
            <Logo className="absolute right-0 phone:top-0 laptop:bottom-0 laptop:top-auto phone:w-3/6 "/>
            <RegisterForm/>
        </div>
    );
};

export default index;
