import React, { Component, createRef } from 'react';
import './DrumPads.css';

class DrumPads extends Component {
  render() {
    return (
      <div className="drum-pads">
        {
          this.props.pads.map(pad => 
            <DrumPad
              power={this.props.power}
              src={pad.src}
              key={pad.button}
              button={pad.button}
              audioName={pad.audioName}
              displaySoundName={this.props.displaySoundName}
            />
          )
        }
      </div>
    );
  }
}

class DrumPad extends Component {

  audio = createRef();
  state = {
    active: false,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    const audio = this.audio.current;
    audio.volume = 0.2;
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.key === this.props.button) {
      this.play();
    }
  }
  
  play = () => {
    // show button presses anyway
    this.setState({ active: true });
    setTimeout(() => this.setState({ active: false }), 100);
    // without power do nothing more
    if (!this.props.power) return;
    const audio = this.audio.current;
    audio.currentTime = 0;
    audio.play();
    this.props.displaySoundName(this.props.audioName);
  }

  render() {
    const className = `pad${this.state.active ? ' active' : ''}`;
    return (
      <div
        className={className}
        onClick={this.play}
      >
        {this.props.button}
        <audio
          src={process.env.PUBLIC_URL + this.props.src}
          ref={this.audio}
        />
      </div>
    )
  }
}

export default DrumPads;
