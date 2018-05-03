import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    const power = this.props.power;
    const display = power ? this.props.display : '\u00A0';
    const className = power ? "display active" : "display";
    return <div className={className}>{display}</div>;
  }
}

export default Display;
