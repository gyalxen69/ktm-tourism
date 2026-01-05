import React, { useState, useRef, useEffect } from 'react';
import './AudioSection.css';

/*
  PLACEHOLDER: Audio Files
  
  Place your audio file(s) in: /public/media/audio/
  
  Requirements:
  - At least 30 seconds long
  - Can be: background music, ambient city sounds, narrated guide, local tale, etc.
  
  Supported formats: MP3, WAV, OGG
*/

const audioTracks = [
  {
    id: 1,
    title: 'Morning Bells at Pashupatinath',
    description: 'Experience the sacred sounds of temple bells echoing through the morning mist.',
    src: '/media/audios/temple-bells.mp3',
    duration: '1:30',
    type: 'Ambient',
  },
  {
    id: 2,
    title: 'Bustling Thamel Streets',
    description: 'The vibrant sounds of tourists, vendors, and city life in the heart of Kathmandu.',
    src: '/media/audios/thamel-sounds.mp3',
    duration: '0:30',
    type: 'City Sounds',
  },
  {
    id: 3,
    title: 'Buddhist Monastery Chants',
    description: 'The mantras chant of the monks in an ancient monastry.',
    src: '/media/audios/buddhist-chants.mp3',
    duration: '1:30',
    type: 'Mantra',
  },
];

function AudioSection() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent || 0);
      
      const minutes = Math.floor(audio.currentTime / 60);
      const seconds = Math.floor(audio.currentTime % 60);
      setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime('0:00');
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  const playTrack = (track) => {
    if (currentTrack?.id === track.id && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(e => console.log('Audio play failed:', e));
        }
      }, 100);
    }
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !currentTrack) return;
    
    const rect = e.target.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * audioRef.current.duration;
  };

  return (
    <section id="audio" className="audio-section">
      <div className="section-header">
        <h2>Sounds of Kathmandu</h2>
        <p>Close your eyes and immerse yourself in the authentic sounds of the city</p>
      </div>

      <div className="audio-player-container">
        {/* Hidden audio element */}
        <audio ref={audioRef} src={currentTrack?.src}>
          Your browser does not support the audio element.
        </audio>

        {/* Now Playing */}
        <div className="now-playing">
          <div className="now-playing-info">
            {currentTrack ? (
              <>
                <span className="playing-label">
                  {isPlaying ? '🎵 Now Playing' : '⏸️ Paused'}
                </span>
                <h3>{currentTrack.title}</h3>
                <p>{currentTrack.description}</p>
              </>
            ) : (
              <>
                <span className="playing-label">Select a track</span>
                <h3>Experience the Sounds</h3>
                <p>Choose from our collection of authentic Kathmandu audio</p>
              </>
            )}
          </div>
          
          {currentTrack && (
            <div className="audio-controls">
              <div className="time-display">
                <span>{currentTime}</span>
                <span>{currentTrack.duration}</span>
              </div>
              <div className="progress-bar" onClick={handleProgressClick}>
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Track List */}
        <div className="track-list">
          <h3>Audio Collection</h3>
          {audioTracks.map((track) => (
            <div 
              key={track.id}
              className={`track-item ${currentTrack?.id === track.id ? 'active' : ''}`}
              onClick={() => playTrack(track)}
            >
              <button className="play-btn">
                {currentTrack?.id === track.id && isPlaying ? '⏸️' : '▶️'}
              </button>
              <div className="track-info">
                <h4>{track.title}</h4>
                <span className="track-type">{track.type}</span>
              </div>
              <span className="track-duration">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudioSection;
