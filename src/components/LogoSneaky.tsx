import React from "react";
import LogoSneakyImage from "../assets/logoAlb.png";
import Image from "next/image";

interface LogoInterface {
    className?: string;
}

const LogoSneaky = ({ className }: LogoInterface) => {
    return (
        <Image
            src={LogoSneakyImage}
            alt="SneakyDevs"
            className={`phone:max-w-xs ${className}`}
        />
    );
};

export default LogoSneaky;
