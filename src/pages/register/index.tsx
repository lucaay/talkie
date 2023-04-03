import React from "react";
import Logo from "../../components/Logo";
import RegisterForm from "@/components/RegisterComponents/RegisterForm";
const index = () => {
    return (
        <div className="bg-login-pattern bg-cover w-full h-screen">
            <Logo className="absolute right-0 phone:top-0 laptop:bottom-0 tablet:top-auto laptop:w-48 phone:w-3/6 tablet:bottom-0 tablet:w-60"/>
            <RegisterForm/>
        </div>
    );
};

export default index;
