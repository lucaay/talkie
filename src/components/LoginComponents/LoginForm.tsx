"use client";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import router from "next/router";
import signIn from "@/firebase/auth/signin";
import React, { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

function LoginForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
    }>({});
    const [firebaseErrors, setFirebaseErrors] = useState<{
        [key: string]: any;
    }>({});

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email) && email.length > 0;
    };
    const validatePassword = (password: string) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return regex.test(password);
    };

    const validateInputs = (email: string, password: string) => {
        let tempErrors: {} = {};
        !validateEmail(email) &&
            (tempErrors = { email: "Invalid email", ...tempErrors });
        !validatePassword(password) &&
            (tempErrors = { password: "Invalid password", ...tempErrors });
        setErrors(tempErrors);
        return validateEmail(email) && validatePassword(password);
    };

    const handleForm = async (event: any) => {
        event.preventDefault();

        if (!validateInputs(email, password)) return;

        const { result, error } = await signIn(email, password);

        if (error) {
            setFirebaseErrors(error);
            notifications.show({
                title: "Error",
                color: "red",
                message: "Loggin failed",
                autoClose: 3000,
            });
            return console.log(error);
        }
        notifications.show({
            title: "Success",
            color: "green",
            message: "Loggin successful",
            autoClose: 1000,
            onClose: () => router.push("/feed"),
        });
        // else successful
        console.log(result);
    };

    useEffect(() => {
        console.log(errors);
    }, [errors]);
    return (
        <>
            <form
                onSubmit={handleForm}
                className="phone:w-8/12 tablet:w-3/6 laptop:w-4/12 desktop:w-1/4 flex flex-col gap-2 justify-center items-center"
            >
                <TextInput
                    placeholder="Email"
                    label="Email"
                    withAsterisk
                    className="font-ibm w-full"
                    styles={{ label: { color: "white" } }}
                    size="md"
                    error={errors.email}
                    value={email}
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextInput
                    placeholder="Password"
                    type="password"
                    label="Password"
                    error={errors.password}
                    withAsterisk
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    styles={{ label: { color: "white" } }}
                    className="font-ibm w-full"
                    size="md"
                />
                <div className="flex flex-row justify-between w-full">
                    <Link
                        href="/forgot-password"
                        className="text-start hover:text-gray-300 ease-in-out text-white font-ibm w-full"
                    >
                        {" "}
                        Forgot your password?{" "}
                    </Link>
                    <Link
                        href="/register"
                        className="text-right hover:text-gray-300 ease-in-out text-white font-ibm w-full"
                    >
                        {" "}
                        Sign Up!{" "}
                    </Link>
                </div>
                <Button
                    radius="lg"
                    type="submit"
                    size="md"
                    uppercase
                    color="hover:text-blue-400 ease-in-out"
                    className="bg-blue-600  font-ibm w-1/2 mt-6"
                >
                    Login
                </Button>
            </form>
        </>
    );
}

export default LoginForm;
