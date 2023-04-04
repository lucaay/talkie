"use client";
import { Button, Checkbox, Select, TextInput } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import signUp from "@/firebase/auth/signup";
import router from "next/router";
import { notifications } from "@mantine/notifications";

const RegisterForm = () => {
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
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

        const body = JSON.stringify({
            firstName,
            lastName,
            email,
            birthDate,
            gender,
        });
        setIsLoading(true);

        // auth info realtime database
        let url =
            "https://talkie-9443e-default-rtdb.europe-west1.firebasedatabase.app/users.json";
        fetch(url, {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = "Înregistrare eșuată!";
                        throw new Error(errorMessage);
                    });
                }
            })
            .catch((err) => {
                alert(err.message);
            });

        const { result, error } = await signUp(email, password);

        if (error) {
            setFirebaseErrors(error);
            notifications.show({
                title: "Error",
                color: "red",
                message: "Sign up failed",
                autoClose: 3000,
            });
            return console.log(error);
        }
        notifications.show({
            title: "Success",
            color: "green",
            message: "Sign up successful",
            autoClose: 1000,
            onClose: () => router.push("/login"),
        });
        // else successful
        console.log(result);
    };

    useEffect(() => {
        console.log(errors);
    }, [errors]);

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
            <form onSubmit={handleForm}>
                <div className="flex flex-row gap-5 w-full">
                    <TextInput
                        placeholder="First name"
                        label="First name"
                        radius="md"
                        styles={{ label: { color: "white" } }}
                        className="font-ibm w-full"
                        required
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <TextInput
                        placeholder="Last name"
                        label="Last name"
                        radius="md"
                        styles={{ label: { color: "white" } }}
                        className="font-ibm w-full"
                        required
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>
                <TextInput
                    placeholder="Email"
                    label="Email"
                    radius="md"
                    type="email"
                    styles={{ label: { color: "white" } }}
                    className="font-ibm w-full"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    error={errors.email}
                />
                <TextInput
                    placeholder="Password"
                    type={"password"}
                    label="Password"
                    radius="md"
                    styles={{ label: { color: "white" } }}
                    className="font-ibm w-full"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    error={errors.password}
                />
                <div className="flex flex-row gap-5 w-full items-end">
                    <DatePickerInput
                        label="Pick date"
                        placeholder="Pick birthday"
                        value={birthDate}
                        onChange={setBirthDate}
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
                    />
                    <Select
                        data={["Male", "Female"]}
                        placeholder="Gender"
                        radius="md"
                        required
                        value={gender}
                        onChange={(value) => value && setGender(value)}
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
