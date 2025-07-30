import React, { useContext, useEffect } from 'react'
import Song from "../Song/Song"
import { BsMusicNoteList } from "react-icons/bs";
import SongData from "../../assets/Data/SongData"
import { SongContext } from '../../Context/Context';

const SongContainer = () =>
{

  const { setSelectedIndex, setSongList } = useContext(SongContext);
  useEffect(() =>
  {
    setSongList(SongData); // Send full list to context
  }, []);

  return (
    <div className='w-3/7 rounded shadow-lg/100 shadow-blue-600 ring-3 ring-white'>
      <div className='text-4xl text-white border-b-4 border-gray-600 py-3 px-5 font-[cursive] font-bold flex items-center gap-2 '><BsMusicNoteList className='text-green-500' /><h1>Songs...</h1>
      </div>

      <div className='mt-3 h-80 p-4 overflow-auto  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 '>


        {SongData.sort((a, b) =>
        {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }).map((item, i) => <Song image={item.img} name={item.name} artist={item.artist} key={i} index={i} setSelectedIndex={setSelectedIndex} />)}


      </div>
    </div>
  )
}

export default SongContainer