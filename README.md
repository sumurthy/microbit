# Micro:bit Project

Aim of this project is to connect to Micro:bit device over bluetooth using  Web Bluetooth API using Chrome browser. 

*Status: NOT WORKING* 

This is a simple ReactJs based app, which just contains one button. The onClick handler invokes `navigator.bluetooth.requestDevice()` and subsequent promise based methods to read the service characteristics. 

I'm trying to read acclerometer data (I think it is part of the basic Micro:bit device as I have no other accessory connected to the device). I'm using the UUID available [here](https://lancaster-university.github.io/microbit-docs/resources/bluetooth/bluetooth_profile.html)

Upon running, I'm able to see Micro:bit device and pair it. But the I get the SecurityError stating that there is no such service available. 
I tried with different UUIDs and basic device_information as well - but no luck. 

The important piece of code is in `src/App.js` [file](src/App.js). 

Any idea how to solve this? Any example for a simple connect over Bluetooth and read value example with actual UUIDs? Preferably for Accleremeter or Temperature or Magenetometer readings?
