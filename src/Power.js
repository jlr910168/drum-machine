import React, { Component } from 'react';
import './Power.css';

class Power extends Component {

  state = {
    active: false,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {  
      this.activated();
    }
  }

  activated = () => {
    this.props.togglePower();
    this.setState({ active: true });
    setTimeout(() => this.setState({ active: false }), 100);
  }

  render() {
    const className = `power${this.state.active ? ' active' : ''}`;
    const power = this.props.power ? 'on' : 'off';
    return (
      <div
        className={className}
        onClick={this.activated}
      >
       power {power}
      </div>
    )
  }
}

export default Power;
