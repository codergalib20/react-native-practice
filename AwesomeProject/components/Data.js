import { Button } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
class Data extends Component {
  constructor() {
    super();
    this.state = {
      country: "Bangladesh",
      age: 16,
      city: "Nilphamari",
      count: 0,
    }
  }
  changing = () => {
    this.setState({ country: "India", count: + 1 })
  }
 
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.country} || {this.state.age} || {this.state.city}</Text>
        <Text style={styles.text2} >{this.state.count}</Text>
        <Button onPress={this.changing} minH={20} >Button</Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: "#fff",
    textAlign: 'center',
    paddingVertical: 5,
    backgroundColor: "#581845",
  },
  text2 : {
    fontSize: 22,
    color: "#581845",
    textAlign: 'center',
    paddingVertical: 5,
  }
})

export default Data;