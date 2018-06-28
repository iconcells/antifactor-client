import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  _onPressButton() {
    Alert.alert('Congraduation, your device has been registered, you are hack proofed!')
  }
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
      //steelblue powderblue
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Text style={{padding: 40, fontSize: 18}}>
            [Anti-factor security: User Setup]
          </Text>
        </View>
        <View style={{flex: 0.7, backgroundColor: 'skyblue'}}>
          <Text style={{padding: 20, fontSize: 22}}>
            What is your Name?
            ***********
          </Text>
        </View>
        <View style={{flex: 0.7, backgroundColor: 'powderblue'}}>
          <Text style={{padding: 20, fontSize: 22}}>
            What is you Date of birth?
            ***********
          </Text>
        </View>
        <View style={{flex: 0.7, backgroundColor: 'skyblue'}}>
          <Text style={{padding: 20, fontSize: 22}}>
            Tell me one five words secret sentence?
            ***********
          </Text>
        </View>
        <View style={{flex: 1.5, backgroundColor: 'powderblue'}} >
          <Button style="button"
            onPress={this._onPressButton}
            title="[This app will be delete after submit]"
          />
          <Button
            onPress={this._onPressButton}
            title="Register my secret questions"
            color="#841584"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
