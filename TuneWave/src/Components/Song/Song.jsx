import React, { useContext } from 'react'
import { SongContext } from '../../Context/Context'

const Song = ({ image, name, artist, index, setSelectedIndex }) =>
{

  return (
    <div className='flex gap-3 mx-4 border-b-2 border-gray-400 py-2 cursor-pointer' onClick={() => setSelectedIndex(index)}>
      <img src={image} alt="" className='w-15 rounded shadow-sm/50 shadow-cyan-100'/>
      <div className='grid'>
        <h2 className='text-xl font-semibold text-gray-200 capitalize'>{name.split("", 20)}</h2>
        <p className='text-md font-semibold text-gray-400'>{artist}</p>
      </div>
    </div>
  )
}

export default Song