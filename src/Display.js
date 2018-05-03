import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    const className = this.props.power ? "display active" : "display";
    return <div className={className}>{this.props.display}</div>;
  }
}

export default Display;
