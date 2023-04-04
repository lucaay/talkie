import firebase_app from "../../config";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export function getUserEmail() {
    const user = auth.currentUser;
    return user.email;
}
