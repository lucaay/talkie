import firebase_app from "../../config";
import { getAuth } from "firebase/auth";
import { notifications } from "@mantine/notifications";
import router from "next/router";

const auth = getAuth(firebase_app);

export default async function logOut() {
    auth.signOut()
        .then(() => {
            notifications.show({
                title: "Success",
                color: "green",
                message: "LogOut successful",
                autoClose: 1000,
                onClose: () => router.push("/login"),
            });
            // Sign-out successful.
        })
        .catch((err) => {
            notifications.show({
                title: "Error",
                color: "red",
                message: err.message,
                autoClose: 3000,
            });
        });
}
