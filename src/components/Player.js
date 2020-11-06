import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    });
    const audioRef = useRef(null);

    const playSongHandler = () => {
      if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      }
      else{
        audioRef.current.play();
        setIsPlaying(!isPlaying);
      }
    }

    const timerUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo(prevState => ({...prevState, currentTime: current, duration}))
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio ref={audioRef} src={currentSong.audio} onTimeUpdate={timerUpdateHandler}/>
        </div>
    )
}

export default Player
