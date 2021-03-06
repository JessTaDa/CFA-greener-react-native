/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  Alert,
  Image,
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  NavigatorIOS,
  TouchableOpacity,
  Linking,
  Button,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class cuppa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanSuccess: false,
      info: {}
    }
    this.onScannedBarcode = this.onScannedBarcode.bind(this);
  };

  onScannedBarcode (e) {
    console.log("APPLES!!!!!!")
    // console.log(e.data);
    this.setState({
      scanSuccess: true
      });
      // const URL = (`https://greencafe.herokuapp.com/api`?)
      // fetch(`${URL} + ${e.data}`, {

      fetch(`https://greencafe.herokuapp.com/api?${e.data}`, {

      // fetch(`https://greencafe.herokuapp.com/api?=${e.data}`, {

      // fetch(`http://localhost:3000/?cafe_data=${e.data}`, {
        method:'POST'
      })
        .then((response) => console.log(response))
        .catch((error) => {
          console.error(error);
        });
  }

  onButtonPress (e) {
    console.log("BUTTON PRESSED!!!!!!")
    // console.log(e);
    this.setState({
      scanSuccess: false
    })
  };

  render() {
    return (
      <View>

          {/* {this.state.scanSuccess ? (
            // <Text>Wooo Success!</Text>
            <Button color="#841584"/>
          ) : (
            <QRCodeScanner reactivate={true} onRead={(e) => {this.onScannedBarcode(e)}}/>
          )} */}

      {/* {this.state.scanSuccess ? (<Text>Wooo Success!</Text>) :
        (<QRCodeScanner reactivate={true} onRead={(e) => {this.onScannedBarcode(e)}}/>
            )} */}

            {/* {this.state.scanSuccess ? (
              <Button title="True" color="#841584" onPress={this.false.bind(this)}/>
            ) : (
              <Button title="False" color="#841584" onPress={this.true.bind(this)}/>
            )} */}

      {this.state.scanSuccess && <Button onPress={() => {this.onButtonPress()}} title="Go Back">Go Back!!!</Button>}

      {!this.state.scanSuccess && <QRCodeScanner reactivate={true} onRead={(e) => {this.onScannedBarcode(e)}}/>}

      {/* <View>
    {this.state.error ? <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text> : null}
    <Text>Hello World!</Text>
    </View> */}

      </View>
    )
  }
}

AppRegistry.registerComponent('cuppa', () => cuppa);
