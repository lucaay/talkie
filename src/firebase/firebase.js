import Navigate from "react-router-dom";
export function getUserEmail() {
    const user = auth.currentUser;
    return user.email;
}
export function logOut() {
    firebase
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch((err) => {
            alert(err.message);
            <Navigate to="/login" />;
        });
}


