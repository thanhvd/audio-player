import React from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import ReactPlayer from 'react-player/youtube'
import AudioPlayer from './AudioPlayer';

import { songLinks, songs } from './songs';

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = React.useState(-1);

  const currentSong = songs[currentSongIndex];

  return (
    <div className="flex flex-col h-[100vh] bg-slate-800 text-slate-300 gap-[20px] p-4 pb-16">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Lâm's Audio Player</h1>
        <div className='max-h-[320px] overflow-y-scroll'>
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
      <div className='flex justify-center flex-1'>
        <ReactPlayer
          controls
          url={songLinks}
          width={560}
          height={240}
        />
      </div>
    </div>
  );
}
