import { Button, Checkbox, Group, TextInput } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { DatePicker, DatePickerInput } from "@mantine/dates";

const RegisterForm = () => {
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const validatePassword = (password: string) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return regex.test(password);
    };
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
            <div className="flex flex-row gap-5 w-full">
                <TextInput
                    placeholder="First name"
                    label="First name"
                    radius="md"
                    styles={{ label: { color: "white" } }}
                    className="font-ibm w-full"
                />
                <TextInput
                    placeholder="Last name"
                    label="Last name"
                    radius="md"
                    styles={{ label: { color: "white" } }}
                    className="font-ibm w-full"
                />
            </div>
            <TextInput
                placeholder="Email"
                label="Email"
                radius="md"
                styles={{ label: { color: "white" } }}
                className="font-ibm w-full"
            />
            <DatePickerInput
                label="Pick date"
                placeholder="Pick date"
                value={birthDate}
                onChange={setBirthDate}
                styles={{
                    label: { color: "white" },
                    wrapper: { "background-color": "white", borderRadius: 10 },
                }}
                variant="filled"
                className="font-ibm w-full"
            />
            <Checkbox
                label="I agree to the terms and conditions."
                className="w-full pt-3"
                styles={{ label: { color: "white" } }}
            />
            <Button
                radius="md"
                size="md"
                color="hover:text-blue-400 ease-in-out"
                className="bg-blue-600  font-ibm w-2/10 mt-2"
            >
                Create account
            </Button>
        </div>
    );
};

export default RegisterForm;
