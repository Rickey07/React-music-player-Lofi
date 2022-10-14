import React, { useState , useEffect, useRef } from 'react'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Player from './Components/Player'
import Song from './Components/Song'
import chillHop from './Apidata/music'
import LibraryHolder from './Components/LibraryHolder'

export default function App() {
    const [songs,setSongs] = useState([]);
    const [currentSong,setCurrentSong] = useState({});
    const [isPlaying , setIsPlaying] = useState(false)
    const audioElement = useRef();
    const [isLibraryActive,setIsLibraryActive] = useState(false);
    const [songInfo , setSongInfo] = useState({
        currentTime:0,
        duration:0
    });


    // Method to load data on the first load
    const dataRecievedFromChillHop = async () => {
       const data = await chillHop();
       setSongs(data);
       data.forEach((song) => {
        if (song.active === true) {
            setCurrentSong(song);
        }
       })
    } 
    // Hooks:- 
    useEffect(() => {
        dataRecievedFromChillHop();
    },[])

    // Grab the audio element from the dom and update the songInformation

    // Creating an utility function to format the time.

    const convertSecondsToMinutes = (e) => {
        let duration = e.target.duration;
        let currentTime = e.target.currentTime;
        let minutes = Math.floor(duration/60);
        let remainingSeconds = duration - minutes*60;
        let s = parseInt(currentTime %60);
        let m = parseInt((currentTime / 60) % 60)
        let mainDuration = Math.floor(minutes*60)+Math.floor(remainingSeconds)
        setSongInfo({
            ...songInfo,duration:mainDuration,currentTime:m*60+s
        })
    }

    const updateSetSongInfo =(e) => {
        convertSecondsToMinutes(e);
    }

  return (
    <>  
    <LibraryHolder songs={songs} isLibraryActive={isLibraryActive} setIsLibraryActive={setIsLibraryActive}  setCurrentSong={setCurrentSong}/>
        <div className="container">
        <Nav setIsLibraryActive={setIsLibraryActive} isLibraryActive={isLibraryActive}/>
        <Song currentSong={currentSong}/>
        <Player songs ={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} audioElement= {audioElement} setIsPlaying = {setIsPlaying} songInfo = {songInfo} setSongInfo={setSongInfo}/>
        <Footer/>
        <audio src={currentSong.audio} ref={audioElement} onLoadedMetadata={updateSetSongInfo} onTimeUpdate={updateSetSongInfo} loop></audio>
        </div>
    </>
  )
}
