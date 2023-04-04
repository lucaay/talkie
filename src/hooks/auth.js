import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { auth } from "../config";
import { notifications } from "@mantine/notifications";
import isEmailExists from "../utils/isEmailExists";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {
    arrayRemove,
    arrayUnion,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../config";
import router from "next/router";

export function useAuth() {
    const [user, isLoading, error] = useAuthState(auth);

    useEffect(() => {
        if (error) {
            console.log("Error fetching user:", error);
        }
    }, [error]);

    return { user, isLoading, error };
}

export function useLogin() {
    const [isLoading, setLoading] = useState(false);

    async function login({ email, password }) {
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            notifications.show({
                title: "Login successful",
                color: "green",
                message: "Loggin successful",
                autoClose: 1000,
                onClose: () => router.push("/feed"),
            });
        } catch (error) {
            notifications.show({
                title: "Login failed",
                color: "red",
                message: error.message,
                autoClose: 3000,
            });
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return { login, isLoading };
}

export function useRegister() {
    const [isLoading, setLoading] = useState(false);

    async function register({
        firstName,
        lastName,
        email,
        password,
        birthdate,
        gender,
    }) {
        setLoading(true);

        const emailExists = await isEmailExists(email);

        if (emailExists) {
            notifications.show({
                title: "Error",
                color: "red",
                message: "Username already exists",
                autoClose: 3000,
            });
            setLoading(false);
        } else {
            try {
                const res = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                await setDoc(doc(db, "users", res.user.uid), {
                    id: res.user.uid,
                    firstName,
                    lastName,
                    email,
                    birthdate,
                    gender,
                });
                notifications.show({
                    title: "Success",
                    color: "green",
                    message: "Sign up successful",
                    autoClose: 1000,
                    onClose: () => router.push("/login"),
                });
            } catch (error) {
                notifications.show({
                    title: "Signing Up failed",
                    color: "red",
                    message: error.message,
                    autoClose: 3000,
                });
            } finally {
                setLoading(false);
            }
        }
    }

    return { register, isLoading };
}

export function useLogout() {
    const [signOut, isLoading, error] = useSignOut(auth);

    async function logout() {
        if (await signOut()) {
            notifications.show({
                title: "Successfully logged out",
                color: "green",
                message: "Logout successful",
                autoClose: 1000,
                onClose: () => router.push("/login"),
            });
        } else {
            notifications.show({
                title: "Logout failed",
                color: "red",
                message: error.message,
                autoClose: 3000,
            });
        }
    }

    return { logout, isLoading };
}
