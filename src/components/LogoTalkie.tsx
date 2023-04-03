import React from "react";
import LogoSneakyImage from "../assets/logoTalkie.png";
import Image from "next/image";

interface LogoInterface {
    className?: string;
}

const LogoTalkie = ({ className }: LogoInterface) => {
    return (
        <Image
            src={LogoSneakyImage}
            alt="logo"
            className={`phone:max-w-xs ${className}`}
        />
    );
};

export default LogoTalkie;
