import { Button, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";


function LoginForm() {
    const [errors, setErrors] = useState({ password: "" });
    const [password, setPassword] = useState("");

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (password.length < 6) {
            setErrors({
                password: "Parola trebuie sa contina minim 6 caractere",
            });
        }
    };

    return (
        <>
            <div className="phone:w-8/12 tablet:w-3/6 laptop:w-4/12 desktop:w-1/4 flex flex-col gap-2 justify-center items-center">
                <TextInput
                    placeholder="Email"
                    label="Email"
                    withAsterisk
                    className="font-ibm w-full"
                    styles={{label:{color:'white'}}}
                    size="md"
                />
                <PasswordInput
                    placeholder="Password"
                    label="Password"
                    error={errors.password}
                    withAsterisk
                    value={password}
                    onChange={handlePassword}
                    styles={{label:{color:'white'}}}
                    className="font-ibm w-full"
                    size="md"
                />
                <Link
                    href="/forgot-password"
                    className="text-start hover:text-gray-300 ease-in-out text-white font-ibm w-full"
                >
                    {" "}
                    Forgot your password?{" "}
                </Link>
                <Button
                    radius="lg"
                    size="md"
                    uppercase
                    color="hover:text-blue-400 ease-in-out"
                    className="bg-blue-600  font-ibm w-1/2 mt-6"
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </div>
        </>
    );
}

export default LoginForm;
