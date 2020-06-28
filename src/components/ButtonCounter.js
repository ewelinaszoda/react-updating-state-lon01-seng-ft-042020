import React from 'react';

export default class ButtonCounter extends React.Component {

  state = {
    count: 0
  }

  // handleCount = () => {
  //   let newCount = this.state.count + 1
  //   this.setState({
  //     count: newCount
  //   })
  // }

  handleCount = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCount}>Counter</button>
      </div>
    )
  }
}