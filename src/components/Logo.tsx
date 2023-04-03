import React from "react";
import LogoImage from "../assets/logoAlb.png";
import Image from "next/image";

interface LogoInterface {
    className?: string;
}

const Logo = ({ className }: LogoInterface) => {
    return (
        <Image
            src={LogoImage}
            alt="logo"
            className={`phone:max-w-xs ${className}`}
        />
    );
};

export default Logo;
