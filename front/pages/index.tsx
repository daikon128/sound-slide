import styles from '../styles/Home.module.css'
import Head from "next/head";
import React, {useEffect, useState} from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>sound-slide</title>
      </Head>
      <div>
        slide:
        <Slide></Slide>
      </div>
      <div>
        audio control
        <AudioControl></AudioControl>
      </div>

    </div>
  )
}

const Slide = () => {
  return(
    <div>
      <img src="http://127.0.0.1:4001/slide/" alt="sample"/>
    </div>
  )
}

const AudioControl = () => {
  const audio = React.createRef<HTMLAudioElement>()
  const [currentTime, setCurrentTime] = useState(0.0)

  useEffect(() => {
    const timerId = setInterval(
      () => setAudioTime(),
      50
    );
    return () => {
      clearInterval(timerId);

    }
  })

  const setAudioTime = () => {
    let currentTime = 0;
    if (audio.current !== null) {
      currentTime = audio.current.currentTime
    }
    setCurrentTime(currentTime)
  }


  const audioTag =
    <audio controls
           ref={audio}
           src="http://localhost:3001/audio/test.wav">
      Your browser does not support the
      <code>audio</code> element.
    </audio>

  return (
    <span>
      {currentTime}
      <div className="audio">
        {audioTag}
      </div>
    </span>
  )
}
