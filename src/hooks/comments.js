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
import { useCollectionData } from "react-firebase-hooks/firestore";
import { uuidv4 } from "@firebase/util";

export function useAddComment({ postID, uid }) {
    const [isLoading, setLoading] = useState(false);
    async function addComment(text) {
        setLoading(true);
        const id = uuidv4();
        const date = Date.now();
        const docRef = doc(db, "comments", id);
        await setDoc(docRef, { text, id, postID, date, uid, likes: [] });

        notifications.show({
            title: "Comment added",
            color: "green",
            message: "Comment added successfully",
            autoClose: 3000,
        });

        setLoading(false);
    }

    return { addComment, isLoading };
}

export function useComments(postID) {
    const q = query(
        collection(db, "comments"),
        where("postID", "==", postID),
        orderBy("date", "asc")
    );
    const [comments, isLoading, error] = useCollectionData(q);
    if (error) throw error;

    return { comments, isLoading };
}

export function useDeleteComment(id) {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();

    async function deleteComment() {
        const res = window.confirm(
            "Are you sure you want to delete this comment?"
        );

        if (res) {
            setLoading(true);
            const docRef = doc(db, "comments", id);
            await deleteDoc(docRef);
            notifications.show({
                title: "Comment deleted",
                color: "red",
                message: "Comment deleted successfully",
                autoClose: 3000,
            });
            setLoading(false);
        }
    }

    return { deleteComment, isLoading };
}
