import React, { Component, createRef } from 'react';

class DrumPads extends Component {
  render() {
    return (
      this.props.pads.map(pad =>
        <DrumPad
          id={pad.button}
          src={pad.src}
          key={pad.button}
          button={pad.button}
          audioName={pad.audioName}
          displaySoundName={this.props.displaySoundName}
        />)
    );
  }
}

class DrumPad extends Component {

  audio = createRef();

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    const audio = this.audio.current;
    audio.volume = 0.1;
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.key === this.props.button) {
      this.play();
      this.props.displaySoundName(this.props.audioName);
    }
  }

  play = () => {
    const audio = this.audio.current;
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <button onClick={this.play}>{this.props.button.toUpperCase()}</button>
        <audio src={this.props.src} ref={this.audio} />
      </div>
    )
  }
}

export default DrumPads;
