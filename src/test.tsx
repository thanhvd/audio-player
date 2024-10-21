import * as React from 'react';
import AudioPlayer from './AudioPlayer';

const progressStyles: React.CSSProperties = {
  width: 300,
  height: 24,
  backgroundColor: 'silver',
  display: 'block',
  marginBottom: 4,

  position: 'absolute',
  inset: 0,
};

export default function App() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const progressBarRef = React.useRef<HTMLSpanElement | null>(null);
  const bufferedBarRef = React.useRef<HTMLSpanElement | null>(null);

  const [isReady, setIsReady] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currrentProgress, setCurrrentProgress] = React.useState(0);
  const [buffered, setBuffered] = React.useState(0);
  const [volume, setVolume] = React.useState(0.2);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  return (
    <>
      <div>
        <h1>Audio Player</h1>

        <audio
          ref={audioRef}
          controls
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onCanPlay={(e) => {
            e.currentTarget.volume = volume;
            setIsReady(true);
          }}
          onTimeUpdate={(e) => {
            setCurrrentProgress(e.currentTarget.currentTime);
            handleBufferProgress(e);
          }}
          onProgress={handleBufferProgress}
          onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
        >
          <source
            type="audio/mpeg"
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3"
          />
        </audio>

        <div>
          <label htmlFor="progress">Progress</label>
          <input
            name="progress"
            type="range"
            min={0}
            max={duration}
            value={currrentProgress}
            onChange={(e) => {
              if (!audioRef.current) return;

              audioRef.current.currentTime = e.currentTarget.valueAsNumber;

              setCurrrentProgress(e.currentTarget.valueAsNumber);
            }}
          />
          <label htmlFor="volume">Volume</label>
          <input
            name="volume"
            type="range"
            min={0}
            step={0.05}
            max={1}
            value={volume}
            onChange={(e) => {
              if (!audioRef.current) return;

              audioRef.current.volume = e.currentTarget.valueAsNumber;

              setVolume(e.currentTarget.valueAsNumber);
            }}
          />
          <p>{duration}</p>
          <button disabled={!isReady} onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div style={{ position: 'relative', margin: 10 }}>
            <span style={progressStyles} ref={bufferedBarRef}></span>
            <span
              style={{
                ...progressStyles,
                width: 300 * (currrentProgress / duration),
                backgroundColor: 'green',
              }}
              ref={progressBarRef}
            ></span>
            <span
              style={{
                ...progressStyles,
                width: 300 * (buffered / duration),
                backgroundColor: 'green',
                opacity: 0.3,
              }}
              ref={bufferedBarRef}
            ></span>
          </div>
        </div>
      </div>

      <AudioPlayer />
    </>
  );
}
