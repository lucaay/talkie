"use client";
import { Button, Checkbox, Select, TextInput } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import router from "next/router";
import { notifications } from "@mantine/notifications";
import { useRegister } from "@/hooks/auth";
import { useForm } from "react-hook-form";
import isEmailExists from "@/utils/isEmailExists";
import { emailValidate, passwordValidate } from "@/utils/form-validate";

const RegisterForm = () => {
    const [birthdate, setBirthdate] = useState<Date | null>(null);
    const [gender, setGender] = useState<string | null>(null);
    const { register: signup, isLoading } = useRegister();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function handleRegister(data: any) {
        signup({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            birthdate: birthdate,
            gender: gender,
        });
    }

    return (
        <div className="flex flex-col gap-2 justify-center items-center phone:justify-end phone: h-full phone:pb-10 phone:w-10/12 phone:mx-auto tablet:ml-20 tablet:w-3/6 laptop:w-2/6 laptop:pt-28 laptop:justify-center">
            <div className="flex flex-col gap-6">
                <p className="font-fira text-base text-white">START FOR FREE</p>
                <p className="font-jose text-5xl text-white">
                    Create new account.
                </p>
                <p className="font-fira text-white">
                    Already A Member?{" "}
                    <Link
                        href="/login"
                        className="text-right hover:text-gray-300 ease-in-out text-blue-600 font-ibm w-full"
                    >
                        {" "}
                        Log In!{" "}
                    </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="flex flex-row gap-5 w-full">
                    <TextInput
                        placeholder="First name"
                        label="First name"
                        radius="md"
                        styles={{ label: { color: "white" } }}
                        className="font-ibm w-full"
                        required
                        error={errors.firstName?.message as string}
                        {...register("firstName")}
                    />
                    <TextInput
                        placeholder="Last name"
                        label="Last name"
                        radius="md"
                        styles={{ label: { color: "white" } }}
                        className="font-ibm w-full"
                        required
                        error={errors.lastName?.message as string}
                        {...register("lastName")}
                    />
                </div>
                <TextInput
                    placeholder="Email"
                    label="Email"
                    radius="md"
                    type="email"
                    styles={{ label: { color: "white" } }}
                    className="font-ibm w-full"
                    error={errors.email?.message as string}
                    {...register("email", emailValidate)}
                />
                <TextInput
                    placeholder="Password"
                    type={"password"}
                    label="Password"
                    radius="md"
                    styles={{ label: { color: "white" } }}
                    error={errors.password?.message as string}
                    className="font-ibm w-full"
                    {...register("password", passwordValidate)}
                />
                <div className="flex flex-row gap-5 w-full items-end">
                    <DatePickerInput
                        label="Pick date"
                        placeholder="Pick birthday"
                        styles={{
                            label: { color: "white" },
                            wrapper: {
                                backgroundColor: "white",
                                borderRadius: 10,
                            },
                        }}
                        variant="filled"
                        className="font-ibm w-full"
                        required
                        value={birthdate}
                        onChange={(value) => setBirthdate(value)}
                    />
                    <Select
                        data={["Male", "Female"]}
                        placeholder="Gender"
                        radius="md"
                        required
                        value={gender}
                        onChange={(value) => setGender(value)}
                    />
                </div>
                <Checkbox
                    label="I agree to the terms and conditions."
                    className="w-full pt-3 my-2"
                    styles={{ label: { color: "white" } }}
                    required
                />
                <Button
                    type="submit"
                    radius="md"
                    size="md"
                    color="hover:text-blue-400 ease-in-out"
                    className="bg-blue-600  font-ibm w-2/10 mt-2"
                >
                    Create account
                </Button>
            </form>
        </div>
    );
};

export default RegisterForm;
