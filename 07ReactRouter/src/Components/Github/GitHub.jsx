import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function GitHub() {
   const data = useLoaderData()
//   const [data, SetData] = useState([])
//    useEffect(()=>{
// fetch('https://api.github.com/users/hiteshchoudhary').then(response=>response.json()).then(data=>SetData(data)
// )
//     },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>GitHub Followers:{data.followers}
    <img src={data.avatar_url} alt="GitPicture" className='w-100'/></div>
  )
}

export default GitHub

export const githubInfoLoader =async()=>{
 const response =  await  fetch("https://api.github.com/users/hiteshchoudhary")
 return response.json()
}