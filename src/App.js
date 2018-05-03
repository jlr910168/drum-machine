import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Display from './Display';
import Power from './Power';
import './App.css';
import banks from './sound-banks.json';

class App extends Component {
  banks = banks;
  state = {
    pads: this.banks[0].pads,
    display: '\u00A0',
    power: false,
  }
  displaySoundName = display => {
    this.setState({ display });
  }
  togglePower = () => {
    this.setState({ 
      power: !this.state.power,
      display: banks[0].name,
    });
  }
  render() {
    return (
      <div id="drum-machine">
        <Power
          power={this.state.power}
          togglePower={this.togglePower}
        />
        <Display
          display={this.state.display}
          power={this.state.power}
        />
        <DrumPads
          pads={this.state.pads}
          power={this.state.power}
          displaySoundName={this.displaySoundName}
        />
      </div>
    );
  }
}

export default App;
