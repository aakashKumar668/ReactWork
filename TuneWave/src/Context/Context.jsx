// SongContext.js
import { createContext, useState } from 'react';

export const SongContext = createContext();

export const SongProvider = ({ children }) =>
{
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [songList, setSongList] = useState([]); // 🔸 Store the currently active list (all songs or fav)
  return (
    <SongContext.Provider value={{ selectedIndex, setSelectedIndex, songList, setSongList }}>
      {children}
    </SongContext.Provider>
  );
};
