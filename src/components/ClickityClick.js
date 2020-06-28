import React from 'react';

export default class ClickityClick extends React.Component {

  state = {
    hasBeenClicked: false
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
      // callback function will fire once the state has been updated
    }, () => console.log(this.state.hasBeenClicked))
  }

  render() {
    return (
      <div>
        <p>I have
          {this.state.hasBeenClicked
            ? null
            : 'not '
          }
          been clicked!
        </p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
