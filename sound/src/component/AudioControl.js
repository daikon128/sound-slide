import React, {useEffect} from "react";

export const AudioControl = () => {
  const audio = React.createRef()
  const state = {currentTime: 0.0}
  let timerId;


  useEffect(() => {
    timerId = setInterval(
      () => setAudioTime(),
      50
    );
    return () => {
      clearInterval(timerId);

    }
  })

  const setAudioTime = () => {
    this.setState({
      currentTime: this.audio.current.currentTime
    });
  }


    const audioTag =
      <audio controls
             ref={this.audio}
             src="http://localhost:3001/audio/test.wav">
        Your browser does not support the
        <code>audio</code> element.
      </audio>

    return (
      <span>
      {this.state.currentTime}
        <div className="audio">
        {audioTag}
      </div>
    </span>
    )
}