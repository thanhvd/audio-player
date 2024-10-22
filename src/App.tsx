import React from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import AudioPlayer from './AudioPlayer';

import { songs } from './songs';

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = React.useState(-1);

  const currentSong = songs[currentSongIndex];

  return (
    <div className="flex flex-col h-full bg-slate-800 text-slate-300">
      <div className="container mx-auto px-6 py-8 flex-1">
        <h1 className="text-4xl font-bold mb-8">Lâm's Audio Player</h1>
        <div className='max-h-[300px] overflow-y-scroll'>
          <ul>
            {songs.map((song, index) => (
              <li key={song.title} className="mb-1">
                <button
                  onClick={() => setCurrentSongIndex(index)}
                  className={`flex items-center py-4 px-3  w-full space-evenly rounded ${currentSongIndex === index
                    ? 'bg-amber-600 text-white'
                    : ' hover:bg-amber-600 hover:text-white'
                    }`}
                >
                  <span className="text-sm">
                    {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                  </span>
                  <h2 className="flex-1">{song.title}</h2>
                  <span>
                    {index === currentSongIndex ? (
                      <MdPause size={20} />
                    ) : (
                      <MdPlayArrow size={20} />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-auto">
        <AudioPlayer
          key={currentSongIndex}
          currentSong={currentSong}
          songCount={songs.length}
          songIndex={currentSongIndex}
          onNext={() => setCurrentSongIndex((i) => i + 1)}
          onPrev={() => setCurrentSongIndex((i) => i - 1)}
        />
      </div>
    </div>
  );
}
