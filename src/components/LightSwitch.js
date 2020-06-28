import React from 'react';

export default class LightSwitch extends React.Component {

  state = {
    toggled: false
  }

  handleToggled = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggled}>
          {this.state.toggled
            ? 'ON'
            : 'OFF'
          }
        </button>
      </div>
    )
  }
}