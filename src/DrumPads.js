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
              key={pad.button}
              pad={pad}
              display={this.props.display}
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
    if (e.key === this.props.pad.button) {
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
    this.props.display(this.props.pad.audioName);
  }

  render() {
    const className = this.state.active ? 'pad active' : 'pad';
    return (
      <div
        className={className}
        onClick={this.play}
      >
        {this.props.pad.button}
        <audio
          src={process.env.PUBLIC_URL + this.props.pad.src}
          ref={this.audio}
        />
      </div>
    )
  }
}

export default DrumPads;
