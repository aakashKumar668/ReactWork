import React, { useContext, useEffect, useRef, useState } from 'react'
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { IoVolumeLow, IoVolumeHigh } from "react-icons/io5";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdVolumeOff } from "react-icons/io";
import { SongContext } from '../../Context/Context';




const Player = () =>
{
  const { songList, selectedIndex, setSelectedIndex } = useContext(SongContext);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentSong = songList[selectedIndex] || {};
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5)
  const [isFav, setIsFav] = useState(false)

  useEffect(() =>
  {
    if (!currentSong?.music) return;

    // Pause and reset previous audio
    if (audioRef.current)
    {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Create new Audio instance
    const newAudio = new Audio(currentSong.music);
    audioRef.current = newAudio;

    // Update duration when metadata is loaded
    newAudio.addEventListener('loadedmetadata', () =>
    {
      setDuration(newAudio.duration);
    });

    // Update current time as song plays
    newAudio.addEventListener('timeupdate', () =>
    {
      setCurrentTime(newAudio.currentTime);
    });
    // Play the audio
    newAudio
      .play()
      .then(() =>
      {
        setIsPlaying(true);
      })
      .catch((err) =>
      {
        console.error("Playback failed:", err);
      });


    // Handle end of song
    newAudio.onended = () =>
    {
      console.log("Song ended, going to next...");
      handleNext(); // or setSelectedIndex(prev => prev + 1);
    };


    // Cleanup on component unmount
    return () =>
    {
      if (audioRef.current)
      {
        audioRef.current.pause();
        audioRef.current = null;
        newAudio.removeEventListener('timeupdate', () => { });
      }
    };
  }, [selectedIndex, currentSong.music]);


  const togglePlayPause = () =>
  {
    if (!audioRef.current) return;

    if (isPlaying)
    {
      audioRef.current.pause();
    } else
    {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  function handleNext ()
  {
    if (selectedIndex < songList.length - 1)
    {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  function handlePrev ()
  {
    if (selectedIndex > 0)
    {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  // Handle seekbar change
  const handleSeek = (e) =>
  {
    const seekTime = Number(e.target.value);
    if (audioRef.current)
    {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) =>
  {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleVolumeChange = (e) =>
  {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current)
    {
      audioRef.current.volume = newVolume;
    }
  };
  const toggleMute = () =>
  {
    if (audioRef.current)
    {
      const newMuteState = !isMuted;
      audioRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  const Favourite = () =>
  {
    let savedSongs = JSON.parse(localStorage.getItem("favSong")) || [];
    const isExist = savedSongs.some(song => song.name === currentSong.name);
    if (!isExist)
    {
      savedSongs.push(currentSong);
      localStorage.setItem("favSong", JSON.stringify(savedSongs));
      setIsFav(true);
    }
  }
  const unFavourite = () =>
  {
    let savedSongs = JSON.parse(localStorage.getItem("favSong")) || [];
    savedSongs = savedSongs.filter(song => song.name !== currentSong.name);
    localStorage.setItem("favSong", JSON.stringify(savedSongs));
    setIsFav(false);


  }


  useEffect(() =>
  {
    const savedSongs = JSON.parse(localStorage.getItem("favSong")) || [];
    const isExist = savedSongs.some(song => song.name === currentSong.name);
    setIsFav(isExist);
  }, [selectedIndex, currentSong.name]);

  return (
    <>
      <div className='w-3/5 rounded shadow-lg/100 shadow-blue-600 ring-3 ring-white overflow-hidden'>

        <div>{isFav ? (<GoHeartFill onClick={unFavourite} className='text-5xl font-bold text-red-500 absolute z-10 right-40 top-35 cursor-pointer' />) :(<GoHeart onClick={Favourite} className='text-5xl font-bold text-gray-300 absolute z-10 right-40 top-35 cursor-pointer' />)  }
        </div>
        <div className='w-full relative'><img src={currentSong.img} alt="" className='w-full h-70' /></div>
        <div className='p-2 absolute top-80 left-160 tracking-wide grid gap-1'>
          <h1 className='text-2xl font-bold text-gray-200 '>{currentSong.name}</h1>
          <p className='text-xl font-bold text-gray-700 font-[cursive]'>{currentSong.artist}...</p>
        </div>
        <div className='w-full h-31 bg-white'>
          <div>   <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
               [&::-webkit-slider-thumb]:appearance-none
               [&::-webkit-slider-thumb]:h-4
               [&::-webkit-slider-thumb]:w-4
               [&::-webkit-slider-thumb]:rounded-full
               [&::-webkit-slider-thumb]:bg-pink-500
               [&::-webkit-slider-thumb]:shadow-md
               [&::-webkit-slider-thumb]:border-2
               [&::-webkit-slider-thumb]:border-white
               [&::-moz-range-thumb]:h-4
               [&::-moz-range-thumb]:w-4
               [&::-moz-range-thumb]:rounded-full
               [&::-moz-range-thumb]:bg-pink-500"
          />
            <div className='flex justify-between px-3 py-0'>
              <p className='text-md font-semibold text-gray-500'>{formatTime(currentTime)}</p>
              <p className='text-md font-semibold text-gray-500'>{formatTime(duration)}</p>
            </div>
          </div>
          <div>
            <div className='flex gap-10  text-4xl justify-center items-center'>
              <IoMdSkipBackward onClick={handlePrev} />
              <div>
                {isPlaying ?

                  <FaPauseCircle className='text-5xl text-pink-500' onClick={togglePlayPause} /> :
                  <FaPlayCircle className='text-5xl text-pink-500' onClick={togglePlayPause} />}
              </div>
              <IoMdSkipForward onClick={handleNext} />
            </div>
            <div className='w-60 flex gap-1 items-center float-right mr-5'>
              <div className=''>
                {!isMuted ? <IoMdVolumeOff onClick={toggleMute} className='text-3xl' /> : <IoMdVolumeHigh onClick={toggleMute} className='text-3xl' />
                }
              </div>
              <IoVolumeLow className='text-3xl' />

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
               [&::-webkit-slider-thumb]:appearance-none
               [&::-webkit-slider-thumb]:h-3
               [&::-webkit-slider-thumb]:w-3
               [&::-webkit-slider-thumb]:rounded-full
               [&::-webkit-slider-thumb]:bg-purple-500
               [&::-webkit-slider-thumb]:shadow-md
               [&::-webkit-slider-thumb]:border-2
               [&::-webkit-slider-thumb]:border-white
               [&::-moz-range-thumb]:h-3
               [&::-moz-range-thumb]:w-3
               [&::-moz-range-thumb]:rounded-full
               [&::-moz-range-thumb]:bg-purple-500"
              />
              <IoVolumeHigh className='text-3xl' />

            </div>

          </div>


        </div>

      </div>
    </>
  )
}

export default Player