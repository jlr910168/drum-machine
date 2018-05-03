import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    const display = this.props.power ? this.props.display : '\u00A0';
    return <div className="display">{display}</div>;
  }
}

export default Display;
