import LoginForm from "@/components/LoginComponents/LoginForm";
import { BackgroundImage } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from '../../assets/logoAlb.png';

const index = () => {
    return (
        <div className="w-full flex items-center flex-col h-screen justify-center bg-login-pattern bg-cover ">
            <Image src={Logo} alt="logo" className="phone:max-w-xs"/>
            <LoginForm />
        </div>
    );
};

export default index;
