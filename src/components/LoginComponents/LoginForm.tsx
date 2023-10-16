"use client";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import router from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import { useLogin } from "@/hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "@/utils/form-validate";

function LoginForm() {
    const { login, isLoading } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function handleLogin(data: any) {
        login({
            email: data.email,
            password: data.password,
        });
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="phone:w-8/12 tablet:w-3/6 laptop:w-4/12 desktop:w-1/4 flex flex-col gap-2 justify-center items-center"
            >
                <TextInput
                    placeholder="Email"
                    label="Email"
                    withAsterisk
                    className="font-ibm w-full"
                    styles={{ label: { color: "white" } }}
                    size="md"
                    error={errors.email?.message as string}
                    type="email"
                    {...register("email", emailValidate)}
                />
                <TextInput
                    placeholder="Password"
                    type="password"
                    label="Password"
                    error={errors.password?.message as string}
                    withAsterisk
                    styles={{ label: { color: "white" } }}
                    className="font-ibm w-full"
                    size="md"
                    {...register("password", passwordValidate)}
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
