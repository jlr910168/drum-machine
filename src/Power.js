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
    if (e.key === 'Enter') this.press();
  }

  press = () => {
    this.props.togglePower();
    this.setState({ active: true });
    setTimeout(() => this.setState({ active: false }), 100);
  }

  render() {
    const btnClass = this.state.active ? 'power active' : 'power';
    const ledClass = this.props.power ? 'led active' : 'led';
    return (
      <div
        className={btnClass}
        onClick={this.press}
      >
       power
       <div className={ledClass} />
      </div>
    )
  }
}

export default Power;
