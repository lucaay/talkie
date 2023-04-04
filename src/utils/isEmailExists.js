import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../config";

export default async function isEmailExists(email) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size > 0;
}
