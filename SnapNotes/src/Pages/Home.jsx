import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function Home ()
{
    const [posts, setPosts] = useState([]);

    useEffect(() =>
    {
        const fetchPosts = async () =>
        {
            const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
            const data = await getDocs(q);
            setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };

        fetchPosts();
    }, []);

    return (
        <div className="p-5">
            <h1>All Posts</h1>
            {posts.map(post => (
                <div key={post.id} className="border p-4 my-2">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p className="text-sm text-gray-600">Posted by: {post.author?.name || "Unknown"}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
