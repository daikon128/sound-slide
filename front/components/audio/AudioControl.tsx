import React, {useEffect, useState} from "react";

export const AudioControl = () => {
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
           src="http://localhost:3001/audio/2">
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