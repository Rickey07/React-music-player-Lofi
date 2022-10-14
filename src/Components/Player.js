import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';

export default function Player({songs,setCurrentSong , currentSong , isPlaying , audioElement ,setIsPlaying , songInfo,setSongInfo}) {


  // Event Handlers for Player

  // Method to go-back to the previous song
  const handlePrev= () => {
    const index = songs.indexOf(currentSong)
    const newIndex = index-1;
    if (index === songs.length-1) {
      setCurrentSong(songs[0])
    } else {
      setCurrentSong(songs[newIndex])
    }
    setIsPlaying(false)
  }

  // Method to go-back to the previous song
  const handleNext = () => {
    const index = songs.indexOf(currentSong)
    const newIndex = index+1;
    if (index === songs.length-1) {
      setCurrentSong(songs[0])
    } else {
      setCurrentSong(songs[newIndex])
    }
    setIsPlaying(false)
  }

  // Method to pause/play the current song
  const playPause = () => {
    if (isPlaying) {
      audioElement.current.pause();
      setIsPlaying(!isPlaying)
    } else {
      audioElement.current.play();
      setIsPlaying(!isPlaying)
    }
  }
  
  // Utilities For Player

  // Method to check format the time in the format(MM:SS)
  const splitTime = (time) => {
    let minutes = Math.floor(time/60);
    let remainingSeconds = time - minutes*60
    return `${Math.floor(minutes)}:${remainingSeconds<10?`0${Math.floor(remainingSeconds)}`:Math.floor(remainingSeconds)} `
  }

  // Method For Controlling the slider through current seconds
  const dragHandler = (e) => {
    audioElement.current.currentTime = e.target.value
    setSongInfo({
      ...songInfo,currentTime:e.target.value
    })
  }

  return (
    <div className="player">
        <div className="current-song-tracker">
            <p>{splitTime(songInfo.currentTime)}</p>
                <input type="range" max={String(songInfo.duration)}value={songInfo.currentTime} onChange={dragHandler} className='slider'/>
            <p>{splitTime(songInfo.duration)}</p>
        </div>
        <div className="player-keys">
            <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} onClick={handlePrev}/>
            <FontAwesomeIcon className='skip-back' size='2x' icon={isPlaying?faPause:faPlay} onClick={playPause}/>
            <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleRight} onClick={handleNext}/>
        </div>
    </div>
  )
}
