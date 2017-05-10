import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    navigator.bluetooth.requestDevice({  
      filters: [
        {name: 'BBC micro:bit'},
        {services: ['e95d0753-251d-470a-a062-fa1922dfa9a8']}  //ACCELEROMETER SERVICE
      ]
    })    
    .then(device => device.gatt.connect())   
    .then(server => {
      // Getting Service...
      console.log('Connected to Microbit: ' + server )
      return server.getPrimaryService('e95d0753-251d-470a-a062-fa1922dfa9a8'); //ACCELEROMETER SERVICE
    })
    .then(service => {
      // Getting Characteristic...
      //ACCELEROMETER SERVICE - CHARACTERISTICS: Accelerometer Data
      return service.getCharacteristic('e95dca4b-251d-470a-a062-fa19-22dfa9a8'); 
    })
    .then(characteristic => {
      // Reading  Level...
      return characteristic.readValue();
    })
    .then(value => {
      console.log('Value is ' + value.getUint8(0));
    })
    .catch(error => { console.log('Error: ' + error); });
  }


  render() {
    return (
      <div >
        <div>
          <h2>Welcome to MicroBit Demo</h2>
        </div>
        <p>
          To get started, <code><button onClick={this.handleClick}> click here</button></code> and pair the device.
        </p>
      </div>
    );
  }
}

export default App;
