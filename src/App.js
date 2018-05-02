import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Display from './Display';
import './App.css';
import banks from './sound-banks.json';

class App extends Component {
  banks = banks;
  state = {
    pads: this.banks[0].pads,
    display: this.banks[0].name,
  }
  displaySoundName = display => {
    this.setState({ display });
  }
  render() {
    return (
      <div id="drum-machine">
        <Display
          id="display"
          display={this.state.display}
        />
        <DrumPads
          pads={this.state.pads}
          displaySoundName={this.displaySoundName}
        />
      </div>
    );
  }
}

export default App;
