import React from 'react'
import ClickityClick from './components/ClickityClick.js'
import LightSwitch from './components/LightSwitch.js'
import ButtonCounter from './components/ButtonCounter.js'

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <ClickityClick />
        <LightSwitch />
        <ButtonCounter />
      </div>
    )
  }

}