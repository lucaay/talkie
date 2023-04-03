import { Button, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";


function ForgotPasswordForm() {
    const [errors, setErrors] = useState<{password?: string, email?: string}>({ password: "" , email:""});
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    };
    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const handleLogin = () => {
        let tempErrors: {} = {};
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            tempErrors = {
                ...tempErrors,
                email: "Introduceti un email valid.",
            };
        }
        if (password.length < 6) {
            tempErrors = {
                ...tempErrors,
                password: "Parola trebuie sa contina cel putin 6 caractere.",
            };
        }
        setErrors(tempErrors);
    };
    return (
        <>
            <div className="phone:w-8/12 tablet:w-3/6 laptop:w-4/12 desktop:w-1/4 flex flex-col gap-2 justify-center items-center">
                <TextInput
                    placeholder="Email"
                    label="Email"
                    withAsterisk
                    className="font-ibm w-full"
                    styles={{ label: { color: "white" } }}
                    size="md"
                    error={errors.email}
                    value={email}
                    onChange={handleEmail}
                />
                {/* <PasswordInput
                    placeholder="New password"
                    label="New password"
                    error={errors.password}
                    withAsterisk
                    value={password}
                    onChange={handlePassword}
                    styles={{ label: { color: "white" } }}
                    className="font-ibm w-full"
                    size="md"
                /> */}
                <div className="flex flex-row justify-between w-full">
                </div>
                <Button
                    radius="lg"
                    size="md"
                    uppercase
                    color="hover:text-blue-400 ease-in-out"
                    className="bg-blue-600  font-ibm w-2/3 mt-6"
                    onClick={handleLogin}
                >
                    Reset password
                </Button>
                {/* <Button
                    radius="lg"
                    size="md"
                    uppercase
                    color="hover:text-blue-400 ease-in-out"
                    className="bg-blue-600  font-ibm w-1/2 mt-6"
                    onClick={handleLogin}
                >
                    Save password
                </Button> */}
            </div>
        </>
    );
}

export default ForgotPasswordForm;
