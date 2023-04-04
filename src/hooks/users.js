import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../config";
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

export function useUsers() {
    const [users, isLoading] = useCollectionData(collection(db, "users"));
    return { users, isLoading };
}
