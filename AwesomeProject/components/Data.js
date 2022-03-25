import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
class Data extends Component {
  state = {
    country: "Bangladesh",
    age: 16,
    city: "Nilphamari"
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.country} || {this.state.age} || {this.state.city}</Text>
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
  }
})

export default Data;