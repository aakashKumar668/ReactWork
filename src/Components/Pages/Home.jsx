import React, { useEffect, useRef, useState } from 'react'
import SongContainer from './SongContainer'
import Player from '../Player/Player'
import { SongProvider } from '../../Context/Context'
import Favourite from "../Favourite/Favourite"
const Home = (props) =>
{

const [favUpdate, setfavUpdate] = useState(true)
  return (
    <>
      <div className='md:flex bg-blue-950 w-full justify-between gap-10 py-15 px-30 h-131'>
        <SongProvider>
          {props.name == "allsong" ? <SongContainer /> : <Favourite favUpdate={favUpdate} />}

          <Player favUpdate={favUpdate} setfavUpdate={setfavUpdate}/>

        </SongProvider>
      </div>
    </>
  )
}

export default Home