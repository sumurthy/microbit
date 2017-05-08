import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    navigator.bluetooth.requestDevice({ filters: [{ services: [0xFFA0] }] })
    .then(device => device.gatt.connect())
    .then(server => {
      // Getting Service...
      return server.getPrimaryService(0xFFA0);
    })
    .then(service => {
      // Getting Characteristic...
      return service.getCharacteristic(0xFFA0);
    })
    .then(characteristic => {
      // Reading  Level...
      return characteristic.readValue();
    })
    .then(value => {
      console.log('Battery percentage is ' + value.getUint8(0));
    })
    .catch(error => { console.log('Error: ' + error); });
  }


  render() {
    return (
      <div >
        <div>
          <h2>Welcome to MicroBit Excel Demo</h2>
        </div>
        <p>
          To get started, <code><button onClick={this.handleClick}> click here</button></code> and pair the device.
        </p>
      </div>
    );
  }
}

export default App;
