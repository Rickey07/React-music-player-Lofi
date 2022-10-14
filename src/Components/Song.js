import React from 'react'

export default function Song({currentSong}) {
  return (
    <>
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.cover} />
            <h1>{currentSong.name}</h1>
            <h6>{currentSong.artist}</h6>
        </div>
    </>
  )
}
