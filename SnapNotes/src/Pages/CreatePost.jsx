import { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CreatePost ()
{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () =>
    {
        if (!auth.currentUser) return alert("Login required");

        await addDoc(collection(db, "posts"), {
            title,
            content,
            author: {
                name: auth.currentUser.displayName,
                email: auth.currentUser.email,
                uid: auth.currentUser.uid,
            },
            createdAt: serverTimestamp(),
        });

        alert("Post created");
        navigate("/");
    };

    return (
        <div className="p-5 bg-amber-800 text-black">
            <h2>Create Blog</h2>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"  className="border w-full outline"/>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="border w-full outline" />
            <button onClick={handleSubmit}>Post</button>
        </div>
    );
}
export default CreatePost;
