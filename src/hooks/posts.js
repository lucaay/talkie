import { uuidv4 } from "@firebase/util";
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
import { useState } from "react";
import {
    useCollectionData,
    useDocumentData,
} from "react-firebase-hooks/firestore";
import { notifications } from "@mantine/notifications";
import { db } from "../config";

export function useAddPost() {
    const [isLoading, setLoading] = useState(false);

    async function addPost(post) {
        setLoading(true);
        const id = uuidv4();

        await setDoc(doc(db, "posts", id), {
            ...post,
            id,
            date: Date.now(),
            likes: [],
            comments: {},
            shares: [],
        })
            .then(() => {
                notifications.show({
                    title: "Post added",
                    color: "green",
                    message: "Post added successfully",
                    autoClose: 3000,
                });
            })
            .catch((error) => {
                notifications.show({
                    title: "Post add failed",
                    color: "red",
                    message: "Post add failed",
                    autoClose: 3000,
                });
                console.log(`Unsuccessful returned error ${error}`);
            });
        setLoading(false);
    }

    return { addPost, isLoading };
}

export function useToggleLike({ id, isLiked, uid }) {
    const [isLoading, setLoading] = useState(false);

    async function toggleLike() {
        setLoading(true);
        const docRef = doc(db, "posts", id);
        await updateDoc(docRef, {
            likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
        });
        setLoading(false);
    }

    return { toggleLike, isLoading };
}

export function useDeletePost(id) {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();

    async function deletePost() {
        const res = window.confirm(
            "Are you sure you want to delete this post?"
        );

        if (res) {
            setLoading(true);

            // Delete post document
            await deleteDoc(doc(db, "posts", id));

            // Delete comments
            const q = query(
                collection(db, "comments"),
                where("postID", "==", id)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));

            toast({
                title: "Post deleted!",
                status: "info",
                isClosable: true,
                position: "top",
                duration: 5000,
            });

            setLoading(false);
        }
    }

    return { deletePost, isLoading };
}

export function usePost(id) {
    const q = doc(db, "posts", id);
    const [post, isLoading] = useDocumentData(q);

    return { post, isLoading };
}

export function usePosts(uid = null) {
    const q = uid
        ? query(
              collection(db, "posts"),
              orderBy("date", "desc"),
              where("uid", "==", uid)
          )
        : query(collection(db, "posts"), orderBy("date", "desc"));
    const [posts, isLoading, error] = useCollectionData(q);
    if (error) throw error;
    return { posts, isLoading };
}
