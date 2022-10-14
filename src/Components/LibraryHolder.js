import React from 'react'
import LibraryComponent from './LibraryComponent'

export default function LibraryHolder({songs, setCurrentSong ,isLibraryActive , setIsLibraryActive}) {

  // Method to set the current song from library and setting the active class.
    const getId = (id) => {
        songs.forEach((song) => {
            if (song.id === id) {
                song.active = true;
                setCurrentSong(song)
            } else {
              song.active = false;
            }
        })
    }

  // Method to close the library

  const closeLibrary = () => {
    setIsLibraryActive(false)
  }
    
  return (
      <div className={`side-bar-menu ${isLibraryActive?'libraryOpen':'libraryClose'}`}>
        <div className="heading-holder">
          <h1>Library</h1>
          <span className='close' onClick={closeLibrary}>X</span>
      </div>
      <div className="libraries-holder">
        {songs.map((song) => {
            return <LibraryComponent song={song} key={song.id} getId={getId}/>
        })}
      </div>
    </div>
  )
}
