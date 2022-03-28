// import { ScrollView } from 'native-base';
import React, { Component } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';

class App extends Component {
  Datas = [
    {
      id: 1,
      name: "A",
      bg: "#4f9"
    },
    {
      id: 2,
      name: "B",
      bg: "#e83"
    },
    {
      id: 3,
      name: "C",
      bg: "#4f9"
    },
    {
      id: 4,
      name: "D",
      bg: "#e83"
    },
    {
      id: 5,
      name: "E",
      bg: "#4f9"
    },
    {
      id: 6,
      name: "F",
      bg: "#e83"
    },
    {
      id: 7,
      name: "G",
      bg: "#4f9"
    },
    {
      id: 8,
      name: "H",
      bg: "#e83"
    },
    {
      id: 9,
      name: "I",
      bg: "#4f9"
    },
    {
      id: 10,
      name: "J",
      bg: "#e83"
    },
    {
      id: 11,
      name: "K",
      bg: "#4f9"
    },
    {
      id: 12,
      name: "L",
      bg: "#e83"
    },
    {
      id: 13,
      name: "E",
      bg: "#4f9"
    },
    {
      id: 14,
      name: "F",
      bg: "#e83"
    },
    {
      id: 15,
      name: "G",
      bg: "#4f9"
    },
    {
      id: 16,
      name: "H",
      bg: "#e83"
    },
    {
      id: 17,
      name: "I",
      bg: "#4f9"
    },
    {
      id: 18,
      name: "J",
      bg: "#e83"
    },
    {
      id: 19,
      name: "K",
      bg: "#4f9"
    },
    {
      id: 20,
      name: "L",
      bg: "#e83"
    },
  ]
  onClickShow = (title) => {
    Alert.alert(title)
  }

  ChildData = ({ item }) => {
    const { name, bg, id } = item
    return (
      <View style={{ backgroundColor: bg, margin: 5, width: 100 }}>
        <Text onPress={() => this.onClickShow(name)}>{name}</Text>
        <Text>{id}</Text>
      </View>
    )
  }

  render() {
    return (
      <FlatList horizontal keyExtractor={item => item.id} data={this.Datas} renderItem={({ item }) => <this.ChildData item={item} />} />
    );
  }
}

export default App;