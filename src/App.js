import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Display from './Display';
import Power from './Power';
import './App.css';
import banks from './sound-banks.json';

class App extends Component {
  state = {
    bankId: 0,
    display: '\u00A0',
    power: false,
  }
  display = display => {
    this.setState({ display });
  }
  togglePower = () => {
    // 1. power: true -> false - display nothing
    // 2. power: false -> true - display bank name
    const id = this.state.bankId;
    const display = this.state.power ? '\u00A0' :  banks[id].name;
    this.setState({
      power: !this.state.power,
      display,
    });
  }
  render() {
    const id = this.state.bankId;
    const pads = banks[id].pads;
    return (
      <div id="drum-machine">
        <Power
          power={this.state.power}
          togglePower={this.togglePower}
        />
        <Display
          power={this.state.power}
          display={this.state.display}
        />
        <DrumPads
          power={this.state.power}
          pads={pads}
          display={this.display}
        />
      </div>
    );
  }
}

export default App;
