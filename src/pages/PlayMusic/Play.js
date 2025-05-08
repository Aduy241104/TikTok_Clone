import React, { useEffect, useRef, useState } from 'react'

const linkAudio = require("./JISOO - Your Love (Official Audio).mp4")

function Play() {
    const [isPlay, setPlay] = useState(false);
    const [currentDuration, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);

    const audio = useRef({});


    function handleSeek(e) {
        setCurrent(e.target.value);
        audio.current.currentTime = e.target.value;

    }

    function handlePlay() {
        if (!isPlay) {
            audio.current.play();
            setPlay(!isPlay)
        } else {
            audio.current.pause();
            setPlay(!isPlay)
        }
    }


    function updateCurrent() {
        setCurrent(audio.current.currentTime);
        setDuration(audio.current.duration);
    }


    useEffect(() => {
        audio.current.addEventListener('timeupdate', updateCurrent);

    }, [])



    return (
        <div>
            <h1>HELOO</h1>
            <audio ref={ audio } src={linkAudio}></audio>
            <input
                type="range"
                value={ currentDuration }
                max={ duration }
                onChange={ (e) => handleSeek(e) }
                name=""
                id="" />

            <button onClick={ () => handlePlay() }>play</button>
        </div>
    )
}

export default Play