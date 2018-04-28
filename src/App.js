import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Display from './Display';
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
        <h1>Drum Machine</h1>
        <DrumPads
          pads={this.state.pads}
          displaySoundName={this.displaySoundName}
        />
        <Display
          id="display"
          display={this.state.display}
        />
      </div>
    );
  }
}

export default App;
