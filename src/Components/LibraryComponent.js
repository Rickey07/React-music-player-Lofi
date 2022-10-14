import React from 'react'

export default function LibraryComponent({song,getId}) {

    // Method to send Id to parent component
    function sendId () {
        getId(song.id)
    }
    
  return (
    <div className={`library-container ${song.active === true?'active':''}`} onClick={sendId}>
        <div className="library-image-container">
            <img src={song.cover} alt={song.cover}/>
        </div>
        <div className="library-content-container">
            <h4>{song.name}</h4>
            <span>{song.artist}</span>
        </div>
    </div>
  )
}
