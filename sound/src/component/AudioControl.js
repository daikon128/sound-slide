import React from "react";

export class AudioControl extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef()
    this.state = {currentTime: 0.0}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setAudioTime(),
      50
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  setAudioTime() {
    this.setState({
      currentTime: this.audio.current.currentTime
    });
  }


  render() {
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
}