import { auth } from "../firebase";

const logout = () =>
{
    auth.signOut();
    alert("Logged out");
};
