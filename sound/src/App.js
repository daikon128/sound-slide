import './App.css';
const React = require('react');

function App() {
  return (
    <div className="App">
      <AudioControl ></AudioControl>
    </div>
  );
}

class AudioControl extends React.Component {
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
    this.setState((state, props) => {
      return {currentTime: this.audio.current.currentTime};
    });
  }


  render() {
    const audioTag =
      <audio controls
             ref={this.audio}
             src="http://localhost:3001/audio/test.mp3">
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

export default App;
