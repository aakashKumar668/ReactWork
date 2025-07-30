import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() =>
  {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (snapshot) =>
    {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, []);

  const handleDelete = async (id) =>
  {
    await deleteDoc(doc(db, 'posts', id));
  };
  return (
    <>
          <div className='min-h-full flex justify-around'>
          <div>
            <h2>All Posts</h2>
          </div>
          {auth.currentUser ? (
            posts.map(post => (
              <div key={post.id} className='w-2/5'>
                <img src={post.imageUrl} alt="" width="300" />
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <p>Posted by: {post.username}</p>
                <p>{post.timestamp?.toDate().toLocaleString()}</p>
                {auth.currentUser.uid === post.uid && <button onClick={() => handleDelete(post.id)}>Delete</button>}
              </div>
            ))
          ) : (
            <p>Please login to view posts.</p>
          )}
        </div>
    </>
  )
}

export default Home