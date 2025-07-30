import React, { useState } from 'react'
import { db, storage, auth } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { MdCreateNewFolder, MdOutlinePermMedia } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";



const CreatePost = () =>
{
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handlePost = async () =>
  {
    const imageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);

    await addDoc(collection(db, 'posts'), {
      title,
      desc,
      imageUrl,
      username: auth.currentUser.displayName,
      uid: auth.currentUser.uid,
      timestamp: serverTimestamp()
    });

    navigate('/');
  };

  return (
    <>
      <div className='w-full my-5'> 
        <div className='w-3/5 bg-gray-200 mx-auto rounded grid items-center justify-center pt-3 pb-10 gap-5'>
          <h2 className='text-4xl font-bold flex justify-center items-center gap-2 text-blue-700'>Create Post <MdCreateNewFolder className='text-orange-600 text-5xl'/></h2>
          <div className=' border-2 border-dotted p-5 rounded grid gap-5 text-gray-500'>
            <label htmlFor="media" className='cursor-pointer'> <MdOutlinePermMedia className='text-5xl ' /></label>
            <input type="file" id='media' onChange={(e) => setImage(e.target.files[0])} className='text-xl font-semibold cursor-pointer'/>
          </div>
          <div className='w-full grid gap-5 text-3xl font-semibold tracking-wide'>
            <label htmlFor="title">Title</label>
            <input placeholder="Title here..." className='text-xl outline-2 p-1 rounded text-red-400' id='title' onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='w-full grid gap-5 text-3xl font-semibold tracking-wide'>
            <label htmlFor="desc">Description</label>
            <textarea placeholder="Description" id='desc' className='text-xl outline-2 p-1 rounded text-amber-700 h-20' onChange={(e) => setDesc(e.target.value)} />
          </div>
          <button onClick={handlePost} className='bg-gray-600 border-3 flex gap-2 justify-center items-center border-black text-white font-bold text-2xl rounded p-1 tracking-wider duration-500 hover:text-gray-600 hover:bg-white'>Post <RiSendPlaneLine className='mt-2 text-3xl text-green-400'/></button>
        </div>
      </div>
    </>
  )
}

export default CreatePost