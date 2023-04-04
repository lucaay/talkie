export function getUserEmail() {
    const user = auth.currentUser;
    return user.email;
}
